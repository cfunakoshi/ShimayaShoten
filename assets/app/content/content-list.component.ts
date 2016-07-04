import {Component, OnInit} from "@angular/core";

import {Content} from "./content";
import {ContentComponent} from "./content.component";
import { ContentAddComponent } from "./content-add.component";
import {ContentService} from "./content.service";
import { AuthService } from "../auth/auth.service";
import {ErrorService} from "../errors/error.service";
@Component({
	selector: 'my-content-list',
	template: `
      <div class="container">
        <ul>
			     <my-content *ngFor="let item of items" [content]="item" class="list-group"></my-content>
        </ul>
        <section class="col-md-8 col-md-offset-2" *ngIf="isLoggedIn()">  
          <div id="content-add">
            <my-content-add></my-content-add>
          </div>
        </section>
      </div>
	`, 
	directives: [ContentComponent, ContentAddComponent],
	styles: [`
        .container {
          padding-top: 30px;
        }

        .list-group {
            display: inline-block;
            padding-left: 20px;
        }
        
        img {
          height: 50px;
          width: 70px;
        }

        #content-add {
          padding-top: 50px;
        }
    `]
})
export class ContentListComponent implements OnInit {

  constructor(private _contentService: ContentService, private _authService: AuthService, private _errorService: ErrorService) {}

	items: Content[];	

	ngOnInit() {
		this._contentService.getContent()
			.subscribe(
				 items => {
					this.items = items;
					this._contentService.items = items;
				},
				error => this._errorService.handleError(error)
			);

	}

  isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}