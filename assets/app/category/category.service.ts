import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

import { Category } from "./category";

@Injectable()
export class CategoryService {
	
	constructor(private _http: Http) {}

	categories: Category[] = [];

	getCategory() {
		return this._http.get('http://localhost:3000/product')
			.map(response => {
				const data = response.json().obj;
				let objs: any[] = [];
				for (let i = 0; i < data.length; i++) {
					let category = new Category(data[i].name, data[i]._id);
					objs.push(category);
				};
				return objs;
			})
			.catch(error => Observable.throw(error.json()));
	}

	addCategory(category: Category) {
		const body = JSON.stringify(category);
		const headers = new Headers({'Content-type': 'application/json'});
		return this._http.post('http://localhost:3000/product', body, {headers: headers})
			.map(response => {
				const data = response.json().obj;
				let category = new Category(data.name, data._id);
				return category;
			}) 
			.catch(error => Observable.throw(error.json()));
	}

	deleteCategory(category: Category) {
        this.categories.splice(this.categories.indexOf(category), 1);
        return this._http.delete('http://localhost:3000/product/' + category.categoryId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}