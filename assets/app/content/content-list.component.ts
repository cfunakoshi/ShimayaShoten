import {Component, OnInit} from "@angular/core";

import {Content} from "./content";
import {ContentComponent} from "./content.component";
import {ContentService} from "./content.service";
import {ErrorService} from "../errors/error.service";
@Component({
	selector: 'my-content-list',
	template: `
		<ul>
			<my-content *ngFor="let item of items" [content]="item" class="list-group"></my-content>
        </ul>
	`, 
	directives: [ContentComponent],
	styles: [`
        .list-group {
            display: inline-block;
            padding-left: 20px;
        }
    `]
})
export class ContentListComponent implements OnInit {

	constructor(private _contentService: ContentService, private _errorService: ErrorService) {}

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
}