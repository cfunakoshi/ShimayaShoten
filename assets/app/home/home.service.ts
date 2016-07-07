import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

import {Home} from "./home";

@Injectable()
export class HomeService {
	
	constructor(private _http: Http) {}

	pics: Home[] = [];

	getPics() {
		return this._http.get('http://localhost:3000/home')
			.map(response => {
				const data = response.json().obj;
				let objs: any[] = [];
				for (let i = 0; i < data.length; i++) {
					let pic = new Home(data[i].url, data[i]._id);
					objs.push(pic);
				};
				return objs;
			})
			.catch(error => Observable.throw(error.json()));
	}

	addPic(pic: Home) {
		const body = JSON.stringify(pic);
		const headers = new Headers({'Content-type': 'application/json'});
		return this._http.post('http://localhost:3000/home', body, {headers: headers})
			.map(response => {
				const data = response.json().obj;
				let pic = new Home(data.url);
				return pic;
			}) 
			.catch(error => Observable.throw(error.json()));
	}

	deletePic(pic: Home) {
        this.pics.splice(this.pics.indexOf(pic), 1);
        return this._http.delete('http://localhost:3000/home/' + pic.homeId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}