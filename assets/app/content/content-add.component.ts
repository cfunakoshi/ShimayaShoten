import {Component, OnInit} from "@angular/core";
import { FormBuilder, ControlGroup, Validators, Control } from "@angular/common";

import {Content} from "./content";
import {ContentService} from "./content.service";
import {ErrorService} from "../errors/error.service";
@Component({
	selector: 'my-content-add',
	template:`
		<div class="jumbotron">
          <h2 style="text-align: center;">Add New Product</h2>
        <br>
         <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                    <div class="form-group">
                        <label for="productName">Product Name</label>
                        <input [ngFormControl]="myForm.find('productName')" type="text" id="productName" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input [ngFormControl]="myForm.find('price')" type="text" id="price" class="form-control">
                    </div>
                      <div class="row spacing">
                        <div class="col-md-4">                        
                          <label for="picture">Picture</label>
                          <input type="file" id="store-input" (change)="changeListener($event)" />
                         
                        </div>
                        <div class="col-md-8">
                         <div class="progress">
                            <div class="progress-bar progress-bar-striped active" role="progressbar" id="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%">
                             </div>
                          </div>
                        <img src="." alt="Preview" id="imgPlaceholder"/>
                        </div>
                      </div>

                    <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
          </form>
         </div>

	`, 
	styles: [`
        .jumbotron {
          
        }

        .list-group {
            display: inline-block;
            padding-left: 20px;
        }

        img {
          height: 90px;
          width: 110px;
        }
    `]
})
export class ContentAddComponent implements OnInit {
	
	myForm: ControlGroup;

  	constructor(private _contentService: ContentService, private _fb:FormBuilder, private _errorService: ErrorService) {}

  	ngOnInit() {
    	this.myForm = this._fb.group({
            productName: ['', Validators.required],
            price: ['', Validators.required]
        });
  	}

  	changeListener($event): void {
    	filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');

			var url = document.getElementById("imgPlaceholder").src;
      if (url !== "http://localhost:3000/") {
          filepicker.remove(
              url,
              function(){
                console.log("Removed");
              }
          );
      }
      var input = document.getElementById("store-input");		
      filepicker.store(
    			input,
    			function(Blob){
    				var image = document.getElementById("imgPlaceholder");
      				console.log("Store successful:", JSON.stringify(Blob));
      				image.setAttribute('src', Blob.url);
    			},
    			function(FPError) {
  					//  console.log(FPError.toString()); - print errors to console
    			},
    			function(progress) {
              var progressbar = document.getElementById("progressbar");
              progressbar.style.width = progress+'%';
      				console.log("Loading: "+progress+"%");
    			}
  		);
	  }

	onSubmit() {
    filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');

    var imageUrl = document.getElementById("imgPlaceholder").src;
    console.log(imageUrl);   
    if(imageUrl == "http://localhost:3000/") {
      console.log("Choose a png to store to S3");
    }
    else {
      var image = document.getElementById("imgPlaceholder");
      image.setAttribute('src', ".");
      const content:Content = new Content(this.myForm.value.productName, this.myForm.value.price, null, imageUrl);
            this._contentService.addContent(content)
                .subscribe(
                    data => {
                        console.log(data);
                        this._contentService.items.push(data);
                    },
                    error => this._errorService.handleError(error)
                );
    }
  }
}