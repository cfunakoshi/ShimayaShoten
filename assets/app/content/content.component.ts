import {Component, Input} from "@angular/core";

import {Content} from "./content";
import {ContentService} from "./content.service";
import { AuthService } from "../auth/auth.service";
import {ErrorService} from "../errors/error.service";
@Component({
	selector: 'my-content',
	template: `
		<article class="panel panel-default">
            <br>
            <div class="panel-header text-center">
                {{ content.item }}
            </div>
        	<div class="panel-body">    		
                    <img src="{{content.url}}" alt="Image Not Available"/>
        	</div>
        	<footer class="panel-footer">
        		<div class="price">
        			<p style="font-style:italic;"> Price: $ {{ content.price }} </p>
                    <button class="btn btn-danger" (click)="onDelete()" *ngIf="isLoggedIn()">Delete</button>
        		</div>               
        	</footer>
        </article>
	`,
    styles: [`
        .panel-body {
            height: 250px;
            width: 300px;
        }

        .price {
            display: inline-block;           
            font-size: 12px;
            width: 80%;
            text-align: right;
        }

        img {
            height: 100%;
            width: 100%;
            border: 1px solid black;
            text-align: center;
        }
    `]
})
export class ContentComponent {
	@Input() content: Content;

	constructor(private _contentService: ContentService, private _authService: AuthService, private _errorService: ErrorService) {}

    onDelete() {
        this._contentService.deleteContent(this.content)
            .subscribe(
                data => console.log(data),
                error => this._errorService.handleError(error)
            );
    }

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}