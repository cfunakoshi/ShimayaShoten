"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var home_1 = require("./home");
var HomeService = (function () {
    function HomeService(_http) {
        this._http = _http;
        this.pics = [];
    }
    HomeService.prototype.getPics = function () {
        return this._http.get('http://localhost:3000/home')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var pic = new home_1.Home(data[i].url, data[i]._id);
                objs.push(pic);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    HomeService.prototype.addPic = function (pic) {
        var body = JSON.stringify(pic);
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        return this._http.post('http://localhost:3000/home', body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            var pic = new home_1.Home(data.url);
            return pic;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    HomeService.prototype.deletePic = function (pic) {
        this.pics.splice(this.pics.indexOf(pic), 1);
        return this._http.delete('http://localhost:3000/home/' + pic.homeId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;

//# sourceMappingURL=data:application/json;base64,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QyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXRDTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBdUNiLGtCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSxtQkFBVyxjQXNDdkIsQ0FBQSIsImZpbGUiOiJob21lL2hvbWUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuaW1wb3J0IHtIb21lfSBmcm9tIFwiLi9ob21lXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIb21lU2VydmljZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG5cdHBpY3M6IEhvbWVbXSA9IFtdO1xuXG5cdGdldFBpY3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaG9tZScpXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0Y29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG5cdFx0XHRcdGxldCBvYmpzOiBhbnlbXSA9IFtdO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgcGljID0gbmV3IEhvbWUoZGF0YVtpXS51cmwsIGRhdGFbaV0uX2lkKTtcblx0XHRcdFx0XHRvYmpzLnB1c2gocGljKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0cmV0dXJuIG9ianM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG5cdH1cblxuXHRhZGRQaWMocGljOiBIb21lKSB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBpYyk7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2hvbWUnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0Y29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG5cdFx0XHRcdGxldCBwaWMgPSBuZXcgSG9tZShkYXRhLnVybCk7XG5cdFx0XHRcdHJldHVybiBwaWM7XG5cdFx0XHR9KSBcblx0XHRcdC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuXHR9XG5cblx0ZGVsZXRlUGljKHBpYzogSG9tZSkge1xuICAgICAgICB0aGlzLnBpY3Muc3BsaWNlKHRoaXMucGljcy5pbmRleE9mKHBpYyksIDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ob21lLycgKyBwaWMuaG9tZUlkKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
