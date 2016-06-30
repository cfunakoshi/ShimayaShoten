import {Component, Input} from "@angular/core";

import {Content} from "./content";
import {ContentService} from "./content.service";
import {ErrorService} from "../errors/error.service";
@Component({
	selector: 'my-content',
	template: `
		<article class="panel panel-default">
        	<div class="panel-body">
        		{{ content.item }}
        	</div>
        	<footer class="panel-footer">
        		<div class="author">
        			{{ content.price }}
        		</div>               
        	</footer>
        </article>
	`,
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
    `]
})
export class ContentComponent {
	@Input() content: Content;

	constructor(private _contentService: ContentService, private _errorService: ErrorService) {}
}