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
                    <div id="price">
                        <p style="font-style:italic;"> Price: $ {{ content.price }} </p>
                        <button class="btn btn-danger" (click)="onDelete()" *ngIf="isLoggedIn()">Delete</button>
                    </div> 
        	</div>
        </article>
	`,
    styles: [`
        img {
            height: 100%;
            width: 100%;
            text-align: center;
        }
    `]
})
export class ContentComponent {
	@Input() content: Content;

	constructor(private _contentService: ContentService, private _authService: AuthService, private _errorService: ErrorService) {}

    onDelete() {
        filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');

        var url = this.content.url;
        filepicker.remove(
            url,
            function(){
                console.log("Removed");
            }
        );
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