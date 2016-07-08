import { Component, OnInit } from "@angular/core";

import { Home } from "./home";

import { HomeService } from "./home.service";
import { AuthService } from "../auth/auth.service";
import { ErrorService } from "../errors/error.service";
@Component({
	selector: 'my-home-list',
	template: `
		<div class="row">
			<div class="col-md-10 col-md-offset-1 ">
				<div class="css-carousel">
					<img class="css-img" *ngFor="let pic of pics" src="{{pic.url}}" />
				</div>
			
			</div>
		</div>
		<div class="row" *ngIf="isLoggedIn()">
				<div class="col-md-8 col-md-offset-2 text-center">
					<ul>
						<li class="text-center" *ngFor="let pic of pics">
							<img src="{{pic.url}}" />
							<br>
							<br>
							<button class="btn btn-danger" (click)="onDelete(pic)">Delete</button>
						</li>
					</ul>
				</div>
		</div>
		<div class="row">
		<div class="col-md-8 col-md-offset-2">
    <div class="jumbotron"  *ngIf="isLoggedIn()">
          <h2 style="text-align: center;">Add/Change Picture</h2>
        <br>
            <div class="col-md-4">                        
                <label for="picture">Picture</label>
                <input type="file" id="store-input" (change)="changeListener($event)" />            
             </div>
             <div class="col-md-8">
                 <div class="progress">
                     <div class="progress-bar progress-bar-striped active" role="progressbar" id="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%">
                     </div>
                 </div>
                 <img src="." alt="Preview" id="imgPlaceholder" style="height: 90px;width: 110px;"/>
            </div>
            <button class="btn btn-default" (click)="onSubmit()" *ngIf="isLoggedIn()">Upload</button>
       </div>
       </div>
       </div>
	`,
    styles: [`
    	.row {
    		padding-top: 40px;
    	}

    	.jumbotron {
    		
    	}

   		li {
        loat: none;
        display: inline-block;
      }

      li img {
        height: 80px;
        width: 140px;
      }
    `]
})
export class HomeListComponent implements OnInit {

	constructor(private _homeService: HomeService, private _authService: AuthService, private _errorService: ErrorService) {}

	pics: Home[];

	ngOnInit() {
        this._homeService.getPics()
            .subscribe(
                pics => {
                    this.pics = pics;
                    this._homeService.pics = pics;
                },
                error => this._errorService.handleError(error)
            );
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

	onDelete(pic) {
        filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');

        var url = pic.url;
        filepicker.remove(
            url,
            function(){
                console.log("Removed");
            }
        );
        this._homeService.deletePic(pic)
            .subscribe(
                data => console.log(data),
                error => this._errorService.handleError(error)
            );
    }

	onSubmit() {
        filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');

    	var imageUrl = document.getElementById("imgPlaceholder").src; 
    	if(imageUrl == "http://localhost:3000/") {
      		console.log("Choose a png to store to S3");
    	}
    	else {
      		var image = document.getElementById("imgPlaceholder");
      		image.setAttribute('src', ".");
      		const pic:Home = new Home(imageUrl);
            this._homeService.addPic(pic)
                .subscribe(
                    data => {
                        console.log(data);
                        this._homeService.pics.push(data);
                    },
                    error => this._errorService.handleError(error)
                );
    	}
    }

	isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}