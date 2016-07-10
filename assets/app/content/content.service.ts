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
					let item = new Content(data[i].item, data[i].price, data[i].category, data[i].description, data[i]._id, data[i].url);
					objs.push(item);
				};
				return objs;
			})
			.catch(error => Observable.throw(error.json()));
	}

	addContent(content: Content) {
		const body = JSON.stringify(content);
		const headers = new Headers({'Content-type': 'application/json'});
		return this._http.post('http://localhost:3000/content', body, {headers: headers})
			.map(response => {
				const data = response.json().obj;
				let content = new Content(data.item, data.price, data.category, data.description, data._id, data.url);
				return content;
			}) 
			.catch(error => Observable.throw(error.json()));
	}

	deleteContent(content: Content) {
        this.items.splice(this.items.indexOf(content), 1);
        return this._http.delete('http://localhost:3000/content/' + content.contentId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}