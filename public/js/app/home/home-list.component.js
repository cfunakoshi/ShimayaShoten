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
var core_1 = require("@angular/core");
var home_1 = require("./home");
var home_service_1 = require("./home.service");
var auth_service_1 = require("../auth/auth.service");
var error_service_1 = require("../errors/error.service");
var HomeListComponent = (function () {
    function HomeListComponent(_homeService, _authService, _errorService) {
        this._homeService = _homeService;
        this._authService = _authService;
        this._errorService = _errorService;
        this.valid = false;
    }
    HomeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._homeService.getPics()
            .subscribe(function (pics) {
            _this.pics = pics;
            _this._homeService.pics = pics;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    HomeListComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.valid = true;
    };
    HomeListComponent.prototype.onDelete = function (pic) {
        var _this = this;
        this._homeService.deletePic(pic)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
    };
    HomeListComponent.prototype.onSubmit = function () {
        var _this = this;
        this._homeService.addPic("http://localhost:3000/home", [], this.filesToUpload).then(function (result) {
            console.log(result);
            var pic = new home_1.Home(result.obj.url, result.obj._id);
            _this._homeService.pics.push(pic);
        }, function (error) {
            console.error(error);
        });
    };
    HomeListComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    HomeListComponent = __decorate([
        core_1.Component({
            selector: 'my-home-list',
            template: "\n    <div class=\"row\">\n\t\t\t\t<div class=\"css-carousel\">\n\t\t\t\t\t<img class=\"css-img\" *ngFor=\"let pic of pics\" src=\"./images/{{pic.url}}\" />\n\t\t\t\t</div>\n    </div>\n\t\t<div class=\"row\" *ngIf=\"isLoggedIn()\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li class=\"text-center\" *ngFor=\"let pic of pics\">\n\t\t\t\t\t\t\t<img src=\"./images/{{pic.url}}\" />\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"onDelete(pic)\">Delete</button>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" *ngIf=\"isLoggedIn()\">\n\t\t<div class=\"col-md-6 col-md-offset-3\">\n    <div class=\"jumbotron\">\n          <h2 style=\"text-align: center;\">Add/Change Picture</h2>\n        <br>\n        <br>\n          <div class=\"upload-form\">                       \n                <label for=\"picture\">Picture</label>\n                <input type=\"file\" id=\"store-input\" (change)=\"fileChangeEvent($event)\" />            \n          </div>\n          <div id=\"upload-button\">\n             <button class=\"btn btn-primary\" [disabled]=\"!valid\" (click)=\"onSubmit()\" *ngIf=\"isLoggedIn()\">Upload</button>\n          </div>\n       </div>\n       </div>\n       </div>\n\t",
            styles: ["\n    \t.row {\n    \t\tpadding-top: 40px;\n    \t}\n\n    \t.jumbotron {\n    \t\t\n    \t}\n\n      input {\n        top: 0;\n      }\n\n   \t\tli {\n        float: none;\n        display: inline-block;\n        padding-top: 20px;\n      }\n\n      li img {\n        height: 80px;\n        width: 140px;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, auth_service_1.AuthService, error_service_1.ErrorService])
    ], HomeListComponent);
    return HomeListComponent;
}());
exports.HomeListComponent = HomeListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUU5Qiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw2QkFBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNuRCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQStEdkQ7SUFFQywyQkFBb0IsWUFBeUIsRUFBVSxZQUF5QixFQUFVLGFBQTJCO1FBQWpHLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUlwSCxVQUFLLEdBQVksS0FBSyxDQUFDO0lBSmdHLENBQUM7SUFNekgsb0NBQVEsR0FBUjtRQUFBLGlCQVNJO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7YUFDdEIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFSiwyQ0FBZSxHQUFmLFVBQWdCLFNBQWM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBaUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxHQUFHO1FBQVosaUJBTUk7UUFMQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDN0IsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNOLENBQUM7SUFFSixvQ0FBUSxHQUFSO1FBQUEsaUJBUUc7UUFQRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDckYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFNLEdBQUcsR0FBUSxJQUFJLFdBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFSCxzQ0FBVSxHQUFWO1FBQ08sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQTFHTDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsaXpDQWtDVDtZQUNFLE1BQU0sRUFBRSxDQUFDLGtVQXVCUixDQUFDO1NBQ0wsQ0FBQzs7eUJBQUE7SUE4Q0Ysd0JBQUM7QUFBRCxDQTdDQSxBQTZDQyxJQUFBO0FBN0NZLHlCQUFpQixvQkE2QzdCLENBQUEiLCJmaWxlIjoiaG9tZS9ob21lLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gXCIuL2hvbWUuc2VydmljZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktaG9tZS1saXN0Jyxcblx0dGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjc3MtY2Fyb3VzZWxcIj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzPVwiY3NzLWltZ1wiICpuZ0Zvcj1cImxldCBwaWMgb2YgcGljc1wiIHNyYz1cIi4vaW1hZ2VzL3t7cGljLnVybH19XCIgLz5cblx0XHRcdFx0PC9kaXY+XG4gICAgPC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTIgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiICpuZ0Zvcj1cImxldCBwaWMgb2YgcGljc1wiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vaW1hZ2VzL3t7cGljLnVybH19XCIgLz5cblx0XHRcdFx0XHRcdFx0PGJyPlxuXHRcdFx0XHRcdFx0XHQ8YnI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkRlbGV0ZShwaWMpXCI+RGVsZXRlPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIj5cbiAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uXCI+XG4gICAgICAgICAgPGgyIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPkFkZC9DaGFuZ2UgUGljdHVyZTwvaDI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtZm9ybVwiPiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBpY3R1cmVcIj5QaWN0dXJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cInN0b3JlLWlucHV0XCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIC8+ICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInVwbG9hZC1idXR0b25cIj5cbiAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiF2YWxpZFwiIChjbGljayk9XCJvblN1Ym1pdCgpXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5VcGxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cblx0YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgXHQucm93IHtcbiAgICBcdFx0cGFkZGluZy10b3A6IDQwcHg7XG4gICAgXHR9XG5cbiAgICBcdC5qdW1ib3Ryb24ge1xuICAgIFx0XHRcbiAgICBcdH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG5cbiAgIFx0XHRsaSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBsaSBpbWcge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaG9tZVNlcnZpY2U6IEhvbWVTZXJ2aWNlLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gIHBpY3M6IEhvbWVbXTtcbiAgZmlsZXNUb1VwbG9hZDogRmlsZVtdO1xuICB2YWxpZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9ob21lU2VydmljZS5nZXRQaWNzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcGljcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGljcyA9IHBpY3M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvbWVTZXJ2aWNlLnBpY3MgPSBwaWNzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cblx0ZmlsZUNoYW5nZUV2ZW50KGZpbGVJbnB1dDogYW55KSB7XG4gICAgXHR0aGlzLmZpbGVzVG9VcGxvYWQgPSA8QXJyYXk8RmlsZT4+IGZpbGVJbnB1dC50YXJnZXQuZmlsZXM7XG4gICAgICB0aGlzLnZhbGlkID0gdHJ1ZTtcblx0fVxuXG5cdG9uRGVsZXRlKHBpYykge1xuICAgICAgdGhpcy5faG9tZVNlcnZpY2UuZGVsZXRlUGljKHBpYylcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxuXG5cdG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5faG9tZVNlcnZpY2UuYWRkUGljKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2hvbWVcIiwgW10sIHRoaXMuZmlsZXNUb1VwbG9hZCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgY29uc3QgcGljOkhvbWUgPSBuZXcgSG9tZShyZXN1bHQub2JqLnVybCwgcmVzdWx0Lm9iai5faWQpO1xuICAgICAgICAgICAgdGhpcy5faG9tZVNlcnZpY2UucGljcy5wdXNoKHBpYyk7XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgfVxuXG5cdGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
