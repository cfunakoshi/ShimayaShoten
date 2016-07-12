import {Component, OnInit} from "@angular/core";
import { FormBuilder, ControlGroup, Validators, Control } from "@angular/common";

import { Content } from "./content";
import { Category } from "../category/category";
import { ContentService } from "./content.service";
import { CategoryService } from "../category/category.service";
import { ErrorService } from "../errors/error.service";
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
                    <div class="form-group">
                        <label for="category">Category</label>
                        <input [ngFormControl]="myForm.find('category')" type="text" id="category" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea [ngFormControl]="myForm.find('description')" rows="3" id="description" class="form-control"></textarea>
                    </div>
                      <div class="row spacing">                       
                          <label for="picture">Picture</label>
                          <input type="file" id="store-input" (change)="fileChangeEvent($event)" />   
                      </div>

                    <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
          </form>
         </div>

	`, 
	styles: [`
        .jumbotron {
          
        }

        .row {
          padding-left: 16px;
        }

        img {
          height: 90px;
          width: 110px;
        }
    `]
})
export class ContentAddComponent implements OnInit {
	
	myForm: ControlGroup;
  filesToUpload: File[];

  	constructor(private _contentService: ContentService, private _categoryService: CategoryService, private _fb:FormBuilder, private _errorService: ErrorService) {}

  	ngOnInit() {
    	this.myForm = this._fb.group({
            productName: ['', Validators.required],
            price: ['', Validators.required],
            category: ['', Validators.required],
            description: ['', Validators.required]
        });
  	}

  	fileChangeEvent(fileInput: any) {
    	this.filesToUpload = <Array<File>> fileInput.target.files;
	  }

	onSubmit() {
      this._contentService.makeFileRequest("http://localhost:3000/content/upload", [], this.filesToUpload).then((result) => {
            console.log(result);
            
            const content:Content = new Content( this.myForm.value.productName, this.myForm.value.price, this.myForm.value.category, this.myForm.value.description, null, result.filename );
            this._contentService.addContent(content)
              .subscribe(
                data => {
                  console.log(data);
                  this._contentService.items.push(data);
                  alert("Product was added!");
                },
                error => this._errorService.handleError(error)
              );
            }, (error) => {
            console.error(error);
      });
  }
}