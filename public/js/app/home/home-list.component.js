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
            template: "\n    <div class=\"row\">\n\t\t\t\t<div class=\"css-carousel\">\n\t\t\t\t\t<img class=\"css-img\" *ngFor=\"let pic of pics\" src=\"{{pic.url}}\" />\n\t\t\t\t</div>\n    </div>\n\t\t<div class=\"row\" *ngIf=\"isLoggedIn()\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li class=\"text-center\" *ngFor=\"let pic of pics\">\n\t\t\t\t\t\t\t<img src=\"{{pic.url}}\" />\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"onDelete(pic)\">Delete</button>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" *ngIf=\"isLoggedIn()\">\n\t\t<div class=\"col-md-8 col-md-offset-2\">\n    <div class=\"jumbotron\">\n          <h2 style=\"text-align: center;\">Add/Change Picture</h2>\n        <br>\n            <div class=\"col-md-4\">                        \n                <label for=\"picture\">Picture</label>\n                <input type=\"file\" id=\"store-input\" (change)=\"changeListener($event)\" />            \n             </div>\n             <div class=\"col-md-8\">\n                 <div class=\"progress\">\n                     <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" id=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:0%\">\n                     </div>\n                 </div>\n                 <img src=\".\" alt=\"Preview\" id=\"imgPlaceholder\" style=\"height: 90px;width: 110px;\"/>\n            </div>\n            <button class=\"btn btn-primary\" (click)=\"onSubmit()\" *ngIf=\"isLoggedIn()\">Upload</button>\n       </div>\n       </div>\n       </div>\n\t",
            styles: ["\n    \t.row {\n    \t\tpadding-top: 40px;\n    \t}\n\n    \t.jumbotron {\n    \t\t\n    \t}\n\n   \t\tli {\n        loat: none;\n        display: inline-block;\n      }\n\n      li img {\n        height: 80px;\n        width: 140px;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, auth_service_1.AuthService, error_service_1.ErrorService])
    ], HomeListComponent);
    return HomeListComponent;
}());
exports.HomeListComponent = HomeListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUU5Qiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw2QkFBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNuRCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQThEdkQ7SUFFQywyQkFBb0IsWUFBeUIsRUFBVSxZQUF5QixFQUFVLGFBQTJCO1FBQWpHLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFJekgsb0NBQVEsR0FBUjtRQUFBLGlCQVNJO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7YUFDdEIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFSiwwQ0FBYyxHQUFkLFVBQWUsTUFBTTtRQUNqQixVQUFVLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFL0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFVBQVUsQ0FBQyxNQUFNLENBQ2IsR0FBRyxFQUNIO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMs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QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUF0Skw7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHNwREFzQ1Q7WUFDRSxNQUFNLEVBQUUsQ0FBQywwUEFrQlIsQ0FBQztTQUNMLENBQUM7O3lCQUFBO0lBMkZGLHdCQUFDO0FBQUQsQ0ExRkEsQUEwRkMsSUFBQTtBQTFGWSx5QkFBaUIsb0JBMEY3QixDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcblxuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tIFwiLi9ob21lLnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWhvbWUtbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3NzLWNhcm91c2VsXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImNzcy1pbWdcIiAqbmdGb3I9XCJsZXQgcGljIG9mIHBpY3NcIiBzcmM9XCJ7e3BpYy51cmx9fVwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuICAgIDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwidGV4dC1jZW50ZXJcIiAqbmdGb3I9XCJsZXQgcGljIG9mIHBpY3NcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJ7e3BpYy51cmx9fVwiIC8+XG5cdFx0XHRcdFx0XHRcdDxicj5cblx0XHRcdFx0XHRcdFx0PGJyPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUocGljKVwiPkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiPlxuICAgICAgICAgIDxoMiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5BZGQvQ2hhbmdlIFBpY3R1cmU8L2gyPlxuICAgICAgICA8YnI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGljdHVyZVwiPlBpY3R1cmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwic3RvcmUtaW5wdXRcIiAoY2hhbmdlKT1cImNoYW5nZUxpc3RlbmVyKCRldmVudClcIiAvPiAgICAgICAgICAgIFxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgYWN0aXZlXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgaWQ9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCIwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgc3R5bGU9XCJ3aWR0aDowJVwiPlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi5cIiBhbHQ9XCJQcmV2aWV3XCIgaWQ9XCJpbWdQbGFjZWhvbGRlclwiIHN0eWxlPVwiaGVpZ2h0OiA5MHB4O3dpZHRoOiAxMTBweDtcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+VXBsb2FkPC9idXR0b24+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG5cdGAsXG4gICAgc3R5bGVzOiBbYFxuICAgIFx0LnJvdyB7XG4gICAgXHRcdHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIFx0fVxuXG4gICAgXHQuanVtYm90cm9uIHtcbiAgICBcdFx0XG4gICAgXHR9XG5cbiAgIFx0XHRsaSB7XG4gICAgICAgIGxvYXQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgbGkgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2hvbWVTZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cblxuXHRwaWNzOiBIb21lW107XG5cblx0bmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2hvbWVTZXJ2aWNlLmdldFBpY3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBwaWNzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNzID0gcGljcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faG9tZVNlcnZpY2UucGljcyA9IHBpY3M7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuXHRjaGFuZ2VMaXN0ZW5lcigkZXZlbnQpOiB2b2lkIHtcbiAgICBcdGZpbGVwaWNrZXIuc2V0S2V5KCdBOUxseHV2RXdUb21pWDM2blJqNEl6Jyk7XG5cblx0XHR2YXIgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKS5zcmM7XG4gICAgICBcdGlmICh1cmwgIT09IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiKSB7XG4gICAgICAgICAgZmlsZXBpY2tlci5yZW1vdmUoXG4gICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbW92ZWRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgXHR9XG4gICAgICBcdHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcmUtaW5wdXRcIik7XHRcdFxuICAgICAgXHRmaWxlcGlja2VyLnN0b3JlKFxuICAgIFx0XHRcdGlucHV0LFxuICAgIFx0XHRcdGZ1bmN0aW9uKEJsb2Ipe1xuICAgIFx0XHRcdFx0dmFyIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKTtcbiAgICAgIFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdG9yZSBzdWNjZXNzZnVsOlwiLCBKU09OLnN0cmluZ2lmeShCbG9iKSk7XG4gICAgICBcdFx0XHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgQmxvYi51cmwpO1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0ZnVuY3Rpb24oRlBFcnJvcikge1xuICBcdFx0XHRcdFx0Ly8gIGNvbnNvbGUubG9nKEZQRXJyb3IudG9TdHJpbmcoKSk7IC0gcHJpbnQgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAgIHZhciBwcm9ncmVzc2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NiYXJcIik7XG4gICAgICAgICAgICAgIHByb2dyZXNzYmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3MrJyUnO1xuICAgICAgXHRcdFx0XHRjb25zb2xlLmxvZyhcIkxvYWRpbmc6IFwiK3Byb2dyZXNzK1wiJVwiKTtcbiAgICBcdFx0XHR9XG4gIFx0XHQpO1xuXHQgfVxuXG5cdG9uRGVsZXRlKHBpYykge1xuICAgICAgICBmaWxlcGlja2VyLnNldEtleSgnQTlMbHh1dkV3VG9taVgzNm5SajRJeicpO1xuXG4gICAgICAgIHZhciB1cmwgPSBwaWMudXJsO1xuICAgICAgICBmaWxlcGlja2VyLnJlbW92ZShcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9ob21lU2VydmljZS5kZWxldGVQaWMocGljKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG5cdG9uU3VibWl0KCkge1xuICAgICAgICBmaWxlcGlja2VyLnNldEtleSgnQTlMbHh1dkV3VG9taVgzNm5SajRJeicpO1xuXG4gICAgXHR2YXIgaW1hZ2VVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ1BsYWNlaG9sZGVyXCIpLnNyYzsgXG4gICAgXHRpZihpbWFnZVVybCA9PSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIikge1xuICAgICAgXHRcdGNvbnNvbGUubG9nKFwiQ2hvb3NlIGEgcG5nIHRvIHN0b3JlIHRvIFMzXCIpO1xuICAgIFx0fVxuICAgIFx0ZWxzZSB7XG4gICAgICBcdFx0dmFyIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKTtcbiAgICAgIFx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIFwiLlwiKTtcbiAgICAgIFx0XHRjb25zdCBwaWM6SG9tZSA9IG5ldyBIb21lKGltYWdlVXJsKTtcbiAgICAgICAgICAgIHRoaXMuX2hvbWVTZXJ2aWNlLmFkZFBpYyhwaWMpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvbWVTZXJ2aWNlLnBpY3MucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgXHR9XG4gICAgfVxuXG5cdGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
