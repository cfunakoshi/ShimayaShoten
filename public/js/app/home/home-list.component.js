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
    }
    HomeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._homeService.getPics()
            .subscribe(function (pics) {
            _this.pics = pics;
            _this._homeService.pics = pics;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    HomeListComponent.prototype.changeListener = function ($event) {
        filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');
        var url = document.getElementById("imgPlaceholder").src;
        if (url !== "http://localhost:3000/") {
            filepicker.remove(url, function () {
                console.log("Removed");
            });
        }
        var input = document.getElementById("store-input");
        filepicker.store(input, function (Blob) {
            var image = document.getElementById("imgPlaceholder");
            console.log("Store successful:", JSON.stringify(Blob));
            image.setAttribute('src', Blob.url);
        }, function (FPError) {
            //  console.log(FPError.toString()); - print errors to console
        }, function (progress) {
            var progressbar = document.getElementById("progressbar");
            progressbar.style.width = progress + '%';
            console.log("Loading: " + progress + "%");
        });
    };
    HomeListComponent.prototype.onDelete = function (pic) {
        var _this = this;
        filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');
        var url = pic.url;
        filepicker.remove(url, function () {
            console.log("Removed");
        });
        this._homeService.deletePic(pic)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
    };
    HomeListComponent.prototype.onSubmit = function () {
        var _this = this;
        filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');
        var imageUrl = document.getElementById("imgPlaceholder").src;
        if (imageUrl == "http://localhost:3000/") {
            console.log("Choose a png to store to S3");
        }
        else {
            var image = document.getElementById("imgPlaceholder");
            image.setAttribute('src', ".");
            var pic = new home_1.Home(imageUrl);
            this._homeService.addPic(pic)
                .subscribe(function (data) {
                console.log(data);
                _this._homeService.pics.push(data);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    HomeListComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    HomeListComponent = __decorate([
        core_1.Component({
            selector: 'my-home-list',
            template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-10 col-md-offset-1 \">\n\t\t\t\t<div class=\"css-carousel\">\n\t\t\t\t\t<img class=\"css-img\" *ngFor=\"let pic of pics\" src=\"{{pic.url}}\" />\n\t\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" *ngIf=\"isLoggedIn()\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li class=\"text-center\" *ngFor=\"let pic of pics\">\n\t\t\t\t\t\t\t<img src=\"{{pic.url}}\" />\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"onDelete(pic)\">Delete</button>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t<div class=\"col-md-8 col-md-offset-2\">\n    <div class=\"jumbotron\"  *ngIf=\"isLoggedIn()\">\n          <h2 style=\"text-align: center;\">Add/Change Picture</h2>\n        <br>\n            <div class=\"col-md-4\">                        \n                <label for=\"picture\">Picture</label>\n                <input type=\"file\" id=\"store-input\" (change)=\"changeListener($event)\" />            \n             </div>\n             <div class=\"col-md-8\">\n                 <div class=\"progress\">\n                     <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" id=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:0%\">\n                     </div>\n                 </div>\n                 <img src=\".\" alt=\"Preview\" id=\"imgPlaceholder\" style=\"height: 90px;width: 110px;\"/>\n            </div>\n            <button class=\"btn btn-default\" (click)=\"onSubmit()\" *ngIf=\"isLoggedIn()\">Upload</button>\n       </div>\n       </div>\n       </div>\n\t",
            styles: ["\n    \t.row {\n    \t\tpadding-top: 40px;\n    \t}\n\n    \t.jumbotron {\n    \t\t\n    \t}\n\n   \t\tli {\n        loat: none;\n        display: inline-block;\n      }\n\n      li img {\n        height: 80px;\n        width: 140px;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, auth_service_1.AuthService, error_service_1.ErrorService])
    ], HomeListComponent);
    return HomeListComponent;
}());
exports.HomeListComponent = HomeListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUU5Qiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw2QkFBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNuRCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQWlFdkQ7SUFFQywyQkFBb0IsWUFBeUIsRUFBVSxZQUF5QixFQUFVLGFBQTJCO1FBQWpHLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFJekgsb0NBQVEsR0FBUjtRQUFBLGlCQVNJO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7YUFDdEIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFSiwwQ0FBYyxHQUFkLFVBQWUsTUFBTTtRQUNqQixVQUFVLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFL0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFVBQVUsQ0FBQyxNQUFNLENBQ2IsR0FBRyxFQUNIO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMs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QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUF6Skw7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLCt0REF5Q1Q7WUFDRSxNQUFNLEVBQUUsQ0FBQywwUEFrQlIsQ0FBQztTQUNMLENBQUM7O3lCQUFBO0lBMkZGLHdCQUFDO0FBQUQsQ0ExRkEsQUEwRkMsSUFBQTtBQTFGWSx5QkFBaUIsb0JBMEY3QixDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcblxuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tIFwiLi9ob21lLnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWhvbWUtbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTEgXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjc3MtY2Fyb3VzZWxcIj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzPVwiY3NzLWltZ1wiICpuZ0Zvcj1cImxldCBwaWMgb2YgcGljc1wiIHNyYz1cInt7cGljLnVybH19XCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwidGV4dC1jZW50ZXJcIiAqbmdGb3I9XCJsZXQgcGljIG9mIHBpY3NcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJ7e3BpYy51cmx9fVwiIC8+XG5cdFx0XHRcdFx0XHRcdDxicj5cblx0XHRcdFx0XHRcdFx0PGJyPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUocGljKVwiPkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIiAgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5cbiAgICAgICAgICA8aDIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+QWRkL0NoYW5nZSBQaWN0dXJlPC9oMj5cbiAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBpY3R1cmVcIj5QaWN0dXJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cInN0b3JlLWlucHV0XCIgKGNoYW5nZSk9XCJjaGFuZ2VMaXN0ZW5lcigkZXZlbnQpXCIgLz4gICAgICAgICAgICBcbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIGFjdGl2ZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGlkPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiMFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiIHN0eWxlPVwid2lkdGg6MCVcIj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuXCIgYWx0PVwiUHJldmlld1wiIGlkPVwiaW1nUGxhY2Vob2xkZXJcIiBzdHlsZT1cImhlaWdodDogOTBweDt3aWR0aDogMTEwcHg7XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlVwbG9hZDwvYnV0dG9uPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuXHRgLFxuICAgIHN0eWxlczogW2BcbiAgICBcdC5yb3cge1xuICAgIFx0XHRwYWRkaW5nLXRvcDogNDBweDtcbiAgICBcdH1cblxuICAgIFx0Lmp1bWJvdHJvbiB7XG4gICAgXHRcdFxuICAgIFx0fVxuXG4gICBcdFx0bGkge1xuICAgICAgICBsb2F0OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGxpIGltZyB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9ob21lU2VydmljZTogSG9tZVNlcnZpY2UsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cblx0cGljczogSG9tZVtdO1xuXG5cdG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9ob21lU2VydmljZS5nZXRQaWNzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcGljcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGljcyA9IHBpY3M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvbWVTZXJ2aWNlLnBpY3MgPSBwaWNzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cblx0Y2hhbmdlTGlzdGVuZXIoJGV2ZW50KTogdm9pZCB7XG4gICAgXHRmaWxlcGlja2VyLnNldEtleSgnQTlMbHh1dkV3VG9taVgzNm5SajRJeicpO1xuXG5cdFx0dmFyIHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nUGxhY2Vob2xkZXJcIikuc3JjO1xuICAgICAgXHRpZiAodXJsICE9PSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIikge1xuICAgICAgICAgIGZpbGVwaWNrZXIucmVtb3ZlKFxuICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmVkXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIFx0fVxuICAgICAgXHR2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3JlLWlucHV0XCIpO1x0XHRcbiAgICAgIFx0ZmlsZXBpY2tlci5zdG9yZShcbiAgICBcdFx0XHRpbnB1dCxcbiAgICBcdFx0XHRmdW5jdGlvbihCbG9iKXtcbiAgICBcdFx0XHRcdHZhciBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nUGxhY2Vob2xkZXJcIik7XG4gICAgICBcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3RvcmUgc3VjY2Vzc2Z1bDpcIiwgSlNPTi5zdHJpbmdpZnkoQmxvYikpO1xuICAgICAgXHRcdFx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIEJsb2IudXJsKTtcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdGZ1bmN0aW9uKEZQRXJyb3IpIHtcbiAgXHRcdFx0XHRcdC8vICBjb25zb2xlLmxvZyhGUEVycm9yLnRvU3RyaW5nKCkpOyAtIHByaW50IGVycm9ycyB0byBjb25zb2xlXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHRmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3NiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzYmFyXCIpO1xuICAgICAgICAgICAgICBwcm9ncmVzc2Jhci5zdHlsZS53aWR0aCA9IHByb2dyZXNzKyclJztcbiAgICAgIFx0XHRcdFx0Y29uc29sZS5sb2coXCJMb2FkaW5nOiBcIitwcm9ncmVzcytcIiVcIik7XG4gICAgXHRcdFx0fVxuICBcdFx0KTtcblx0IH1cblxuXHRvbkRlbGV0ZShwaWMpIHtcbiAgICAgICAgZmlsZXBpY2tlci5zZXRLZXkoJ0E5TGx4dXZFd1RvbWlYMzZuUmo0SXonKTtcblxuICAgICAgICB2YXIgdXJsID0gcGljLnVybDtcbiAgICAgICAgZmlsZXBpY2tlci5yZW1vdmUoXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5faG9tZVNlcnZpY2UuZGVsZXRlUGljKHBpYylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuXHRvblN1Ym1pdCgpIHtcbiAgICAgICAgZmlsZXBpY2tlci5zZXRLZXkoJ0E5TGx4dXZFd1RvbWlYMzZuUmo0SXonKTtcblxuICAgIFx0dmFyIGltYWdlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKS5zcmM7IFxuICAgIFx0aWYoaW1hZ2VVcmwgPT0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIpIHtcbiAgICAgIFx0XHRjb25zb2xlLmxvZyhcIkNob29zZSBhIHBuZyB0byBzdG9yZSB0byBTM1wiKTtcbiAgICBcdH1cbiAgICBcdGVsc2Uge1xuICAgICAgXHRcdHZhciBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nUGxhY2Vob2xkZXJcIik7XG4gICAgICBcdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBcIi5cIik7XG4gICAgICBcdFx0Y29uc3QgcGljOkhvbWUgPSBuZXcgSG9tZShpbWFnZVVybCk7XG4gICAgICAgICAgICB0aGlzLl9ob21lU2VydmljZS5hZGRQaWMocGljKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob21lU2VydmljZS5waWNzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgIFx0fVxuICAgIH1cblxuXHRpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
