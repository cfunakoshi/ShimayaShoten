import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

import {Content} from "./content";

@Injectable()
export class ContentService {
	
	constructor(private _http: Http) {}

	items: Content[] = [];

	getContent() {
		return this._http.get('http://localhost:3000/content')
			.map(response => {
				const data = response.json().obj;
				let objs: any[] = [];
				for (let i = 0; i < data.length; i++) {
					let item = new Content(data[i].item, data[i].price, data[i]._id);
					objs.push(item);
				};
				return objs;
			})
			.catch(error => Observable.throw(error.json()));
	}
}