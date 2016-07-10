import {Component, OnInit} from "@angular/core";
import { RouteSegment } from '@angular/router';

import {Content} from "./content";
import {ContentComponent} from "./content.component";
import { ContentService } from "./content.service";
import { AuthService } from "../auth/auth.service";
import { ErrorService } from "../errors/error.service";
@Component({
	selector: 'my-content-list',
	template: `
      <div class="container">
        <ul>
          <template ngFor let-item="$implicit" [ngForOf]="items">
             <li *ngIf="item.category == category"><my-content [content]="item"></my-content></li>
          </template>
        </ul>
      </div>
	`, 
	directives: [ContentComponent],
	styles: [`
        .container {
          padding-top: 30px;
        }

        ul {
          margin: 0;
          padding-left: 0;
        }
        
        ul li{
          width: 19.66%;
          display: inline-block;
        }
    `]
})
export class ContentListComponent implements OnInit {

  category: string;
  items: Content[];

  constructor(routeSegment: RouteSegment, private _contentService: ContentService, private _authService: AuthService, private _errorService: ErrorService) {
    this.category = routeSegment.getParam('id');
  }

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