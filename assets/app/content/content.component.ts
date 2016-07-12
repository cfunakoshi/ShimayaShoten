import {Component, Input} from "@angular/core";

import {Content} from "./content";
import {ContentService} from "./content.service";
import { AuthService } from "../auth/auth.service";
import {ErrorService} from "../errors/error.service";
@Component({
	selector: 'my-content',
	template: `
        <article class="panel panel-default">
        	<div class="panel-body">    		
                    <a (click)="openItem()"><img src="./images/{{content.url}}" alt="Image Not Available"/></a>
        	</div>
            <div class="title text-center">
                <a (click)="openItem()"><h4>{{ content.item }}</h4></a>
            </div>
            <div class="price">                        
                        <button class="btn btn-danger" (click)="onDelete()" *ngIf="isLoggedIn()">Delete</button>
            </div> 
        </article>
        <div class="backdrop" [ngStyle]="{'display': contentDisplay}"></div>
        <div class="modal" tabindex="-1" role="dialog" [ngStyle]="{'display': contentDisplay}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" aria-label="Close" (click)="onClose()"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title"><b>{{content.item}}</b></h4>
                    </div>
                    <div class="modal-body">
                        <div class="content-image">
                            <img src="./images/{{content.url}}" alt="Image Not Available"/>
                        </div>
                        <div class="content-description">
                            <p>{{content.description}}</p>
                        </div>
                        <div class="content-price">
                            <p> Price: $ {{ content.price }} </p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" (click)="onClose()">Close</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal --> 
	`,
    styles: [`
        .title a {
            color: black;
        } 

        .title a:hover {
            color: #FF2400;
        } 

        img {
            height: 100%;
            width: 100%;
            text-align: center;
        }

        .backdrop {
            background-color: rgba(0,0,0,0.1);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `]
})
export class ContentComponent {
	@Input() content: Content;

    contentDisplay = 'none';

	constructor(private _contentService: ContentService, private _authService: AuthService, private _errorService: ErrorService) {}

    onClose() {
        this.contentDisplay = 'none';
    }

    openItem() {
        this.contentDisplay = 'block';
    }

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