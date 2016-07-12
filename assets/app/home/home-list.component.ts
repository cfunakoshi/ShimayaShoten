import { Component, OnInit } from "@angular/core";

import { Home } from "./home";

import { HomeService } from "./home.service";
import { AuthService } from "../auth/auth.service";
import { ErrorService } from "../errors/error.service";
@Component({
	selector: 'my-home-list',
	template: `
    <div class="row">
				<div class="css-carousel">
					<img class="css-img" *ngFor="let pic of pics" src="./images/{{pic.url}}" />
				</div>
    </div>
		<div class="row" *ngIf="isLoggedIn()">
				<div class="col-md-8 col-md-offset-2 text-center">
					<ul>
						<li class="text-center" *ngFor="let pic of pics">
							<img src="./images/{{pic.url}}" />
							<br>
							<br>
							<button class="btn btn-danger" (click)="onDelete(pic)">Delete</button>
						</li>
					</ul>
				</div>
		</div>
		<div class="row" *ngIf="isLoggedIn()">
		<div class="col-md-6 col-md-offset-3">
    <div class="jumbotron">
          <h2 style="text-align: center;">Add/Change Picture</h2>
        <br>
        <br>
          <div class="upload-form">                       
                <label for="picture">Picture</label>
                <input type="file" id="store-input" (change)="fileChangeEvent($event)" />            
          </div>
          <div id="upload-button">
             <button class="btn btn-primary" [disabled]="!valid" (click)="onSubmit()" *ngIf="isLoggedIn()">Upload</button>
          </div>
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

      input {
        top: 0;
      }

   		li {
        float: none;
        display: inline-block;
        padding-top: 20px;
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
  filesToUpload: File[];
  valid: boolean = false;

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

	fileChangeEvent(fileInput: any) {
    	this.filesToUpload = <Array<File>> fileInput.target.files;
      this.valid = true;
	}

	onDelete(pic) {
      this._homeService.deletePic(pic)
        .subscribe(
            data => console.log(data),
            error => this._errorService.handleError(error)
        );
    }

	onSubmit() {
      this._homeService.addPic("http://localhost:3000/home", [], this.filesToUpload).then((result) => {
            console.log(result);
            const pic:Home = new Home(result.obj.url, result.obj._id);
            this._homeService.pics.push(pic);
        }, (error) => {
            console.error(error);
        });
   }

	isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}