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

	addPic( url: string, params: Array<string>, files: Array<File> ) {
		return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
	}

	deletePic(pic: Home) {
        this.pics.splice(this.pics.indexOf(pic), 1);
        return this._http.delete('http://localhost:3000/home/' + pic.homeId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}