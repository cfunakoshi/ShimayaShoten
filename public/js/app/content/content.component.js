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
var content_1 = require("./content");
var content_service_1 = require("./content.service");
var auth_service_1 = require("../auth/auth.service");
var error_service_1 = require("../errors/error.service");
var ContentComponent = (function () {
    function ContentComponent(_contentService, _authService, _errorService) {
        this._contentService = _contentService;
        this._authService = _authService;
        this._errorService = _errorService;
    }
    ContentComponent.prototype.onDelete = function () {
        var _this = this;
        filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');
        var url = this.content.url;
        filepicker.remove(url, function () {
            console.log("Removed");
        });
        this._contentService.deleteContent(this.content)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
    };
    ContentComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', content_1.Content)
    ], ContentComponent.prototype, "content", void 0);
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'my-content',
            template: "\n\t\t<article class=\"panel panel-default\">\n            <br>\n            <div class=\"panel-header text-center\">\n                {{ content.item }}\n            </div>\n        \t<div class=\"panel-body\">    \t\t\n                    <img src=\"{{content.url}}\" alt=\"Image Not Available\"/>\n        \t</div>\n        \t<footer class=\"panel-footer\">\n        \t\t<div class=\"price\">\n        \t\t\t<p style=\"font-style:italic;\"> Price: $ {{ content.price }} </p>\n                    <button class=\"btn btn-danger\" (click)=\"onDelete()\" *ngIf=\"isLoggedIn()\">Delete</button>\n        \t\t</div>               \n        \t</footer>\n        </article>\n\t",
            styles: ["\n        .panel-body {\n            height: 250px;\n            width: 300px;\n        }\n\n        .price {\n            display: inline-block;           \n            font-size: 12px;\n            width: 80%;\n            text-align: right;\n        }\n\n        img {\n            height: 100%;\n            width: 100%;\n            border: 1px solid black;\n            text-align: center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, auth_service_1.AuthService, error_service_1.ErrorService])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUUvQyx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFDakQsNkJBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUF5Q3JEO0lBR0MsMEJBQW9CLGVBQStCLEVBQVUsWUFBeUIsRUFBVSxhQUEyQjtRQUF2RyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUU1SCxtQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkRyxVQUFVLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDM0IsVUFBVSxDQUFDLE1BQU0sQ0FDYixHQUFHLEVBQ0g7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBdkJKO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQXpDVDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsbXFCQWdCVDtZQUNFLE1BQU0sRUFBRSxDQUFDLDhaQW1CUixDQUFDO1NBQ0wsQ0FBQzs7d0JBQUE7SUEwQkYsdUJBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHdCQUFnQixtQkF5QjVCLENBQUEiLCJmaWxlIjoiY29udGVudC9jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtDb250ZW50fSBmcm9tIFwiLi9jb250ZW50XCI7XG5pbXBvcnQge0NvbnRlbnRTZXJ2aWNlfSBmcm9tIFwiLi9jb250ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1jb250ZW50Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7eyBjb250ZW50Lml0ZW0gfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcdDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+ICAgIFx0XHRcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e2NvbnRlbnQudXJsfX1cIiBhbHQ9XCJJbWFnZSBOb3QgQXZhaWxhYmxlXCIvPlxuICAgICAgICBcdDwvZGl2PlxuICAgICAgICBcdDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgXHRcdDxkaXYgY2xhc3M9XCJwcmljZVwiPlxuICAgICAgICBcdFx0XHQ8cCBzdHlsZT1cImZvbnQtc3R5bGU6aXRhbGljO1wiPiBQcmljZTogJCB7eyBjb250ZW50LnByaWNlIH19IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICBcdFx0PC9kaXY+ICAgICAgICAgICAgICAgXG4gICAgICAgIFx0PC9mb290ZXI+XG4gICAgICAgIDwvYXJ0aWNsZT5cblx0YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5wYW5lbC1ib2R5IHtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICAgICAgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRDb21wb25lbnQge1xuXHRASW5wdXQoKSBjb250ZW50OiBDb250ZW50O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRlbnRTZXJ2aWNlOiBDb250ZW50U2VydmljZSwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cblxuICAgIG9uRGVsZXRlKCkge1xuICAgICAgICBmaWxlcGlja2VyLnNldEtleSgnQTlMbHh1dkV3VG9taVgzNm5SajRJeicpO1xuXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmNvbnRlbnQudXJsO1xuICAgICAgICBmaWxlcGlja2VyLnJlbW92ZShcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9jb250ZW50U2VydmljZS5kZWxldGVDb250ZW50KHRoaXMuY29udGVudClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
