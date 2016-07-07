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
		<div class="jumbotron col-md-8 col-md-offset-2"  *ngIf="isLoggedIn()">
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
	`,
    styles: [`
    	.row {
    		padding-top: 40px;
    	}

    	.jumbotron {
    		
    	}

   		li {
            float: none;
            display: inline-block;
        }

        li img{
            height: 80px;
            width: 140px;
        }

        .css-carousel {
      		width: 100%;
      		height: 600px; /* Height of images */
      		position: relative;
      		overflow: hidden;
    	}

    	.css-carousel .css-img {
      		max-width: 100%;
      		height: 100%;
      		position: absolute;
      		top: 50%;
      		left: 50%;;
      		transform: translate(-50%, -50%);
      		opacity: 0;
            -webkit-animation: css-carousel-fade 25s linear infinite;
            -moz-animation: css-carousel-fade 25s linear infinite;
            -ms-animation: css-carousel-fade 25s linear infinite;
      		animation: css-carousel-fade 25s linear infinite;
    	}

    	.css-carousel .css-img:nth-child(2) {
            -webkit-animation-delay: 5s;
            -moz-animation-delay: 5s;
            -ms-animation-delay: 5s;
            animation-delay: 5s;
    	}

    	.css-carousel .css-img:nth-child(3) {
            -webkit-animation-delay: 10s;
            -moz-animation-delay: 10s;
            -ms-animation-delay: 10s;
            animation-delay: 10s;
    	}

    	.css-carousel .css-img:nth-child(4) {
            -webkit-animation-delay: 15s;
            -moz-animation-delay: 15s;
            -ms-animation-delay: 15s;
            animation-delay: 15s;
    	}

    	.css-carousel .css-img:nth-child(5) {
            -webkit-animation-delay: 20s;
            -moz-animation-delay: 20s;
            -ms-animation-delay: 20s;
            animation-delay: 20s;
    	}

    	@-webkit-keyframes css-carousel-fade {
        	0%, 20%, 100% { opacity: 0; }
        	5%, 15% { opacity: 1;}
    	}

    	@-moz-keyframes css-carousel-fade {
        	0%, 20%, 100% { opacity: 0; }
        	5%, 15% { opacity: 1;}
    	}

    	@-ms-keyframes css-carousel-fade {
        	0%, 20%, 100% { opacity: 0; }
        	5%, 15% { opacity: 1;}
    	}

    	@keyframes css-carousel-fade {
      		0%, 20%, 100% { opacity: 0; }
      		5%, 15% { opacity: 1;}
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