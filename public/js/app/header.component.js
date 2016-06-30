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
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth/auth.service");
var HeaderComponent = (function () {
    function HeaderComponent(_authService) {
        this._authService = _authService;
        this._authService = _authService;
    }
    HeaderComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n        <header class=\"row\">\n            <nav class=\"navbar navbar-inverse\">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-header\">\n                        <a class=\"navbar-brand\" [routerLink]=\"['./']\">Test</a>\n                    </div>\n                     <ul class=\"nav navbar-nav\">\n                        <li><a [routerLink]=\"['./']\">Home</a></li>\n                        <li><a [routerLink]=\"['./about']\">About Us</a></li>\n                        <li><a [routerLink]=\"['./content']\">Products</a></li>\n                        <li><a [routerLink]=\"['./location']\">Location</a></li>\n                        <li><a [routerLink]=\"['./message']\">Message</a></li>\n                     </ul>\n                     <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a [routerLink]=\"['./auth']\" *ngIf=\"!isLoggedIn()\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n                        <li><a [routerLink]=\"['./auth']\" *ngIf=\"isLoggedIn()\"><span class=\"glyphicon glyphicon-user\"></span> Settings</a></li>\n                     </ul>\n                </div>\n            </nav>\n        </header>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .navbar-brand {\n           color: white;          \n        }\n\n        ul {\n            text-align: center;\n        }\n\n        li {\n            float: none;\n            display: inline-block;\n        }\n\n        .router-link-active {\n            color: white;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCw2QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQTZDaEQ7SUFFQSx5QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBcERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSwrc0NBcUJUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsNFNBaUJSLENBQUM7U0FDTCxDQUFDOzt1QkFBQTtJQVdGLHNCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSx1QkFBZSxrQkFVM0IsQ0FBQSIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBbcm91dGVyTGlua109XCJbJy4vJ11cIj5UZXN0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuLyddXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9hYm91dCddXCI+QWJvdXQgVXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vY29udGVudCddXCI+UHJvZHVjdHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vbG9jYXRpb24nXVwiPkxvY2F0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL21lc3NhZ2UnXVwiPk1lc3NhZ2U8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vYXV0aCddXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblwiPjwvc3Bhbj4gTG9naW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vYXV0aCddXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdXNlclwiPjwvc3Bhbj4gU2V0dGluZ3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlID0gX2F1dGhTZXJ2aWNlO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
