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
            template: "\n        <header class=\"row\">\n            <nav class=\"navbar navbar-inverse\">\n                <div class=\"container\">\n                    <div class=\"navbar-header\">\n                        <a class=\"navbar-brand\" [routerLink]=\"['./']\">Logo</a>\n                    </div>\n                     <ul class=\"nav navbar-nav\">\n                        <li><a [routerLink]=\"['./']\">Home</a></li>\n                        <li><a [routerLink]=\"['./about/mission']\">About Us</a></li>\n                        <li><a [routerLink]=\"['./content']\">Products</a></li>\n                        <li><a [routerLink]=\"['./location']\">Location</a></li>\n                     </ul>\n                     <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a [routerLink]=\"['./auth']\" *ngIf=\"!isLoggedIn()\"><span class=\"glyphicon glyphicon-log-in\"></span> Admin Login</a></li>\n                        <li><a [routerLink]=\"['./auth/profile']\" *ngIf=\"isLoggedIn()\"><span class=\"glyphicon glyphicon-user\"></span> Settings</a></li>\n                     </ul>\n                </div>\n            </nav>\n        </header>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        * {\n            -webkit-border-radius: 0 !important;\n            -moz-border-radius: 0 !important;\n            border-radius: 0 !important;\n        }\n\n        .navbar-brand {\n           color: white;          \n        }\n\n        ul {\n            text-align: center;\n        }\n\n        li {\n            float: none;\n            display: inline-block;\n        }\n\n        .router-link-active {\n            color: white;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCw2QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQWtEaEQ7SUFFQSx5QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBekRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSwrb0NBb0JUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsaWRBdUJSLENBQUM7U0FDTCxDQUFDOzt1QkFBQTtJQVdGLHNCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSx1QkFBZSxrQkFVM0IsQ0FBQSIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBbcm91dGVyTGlua109XCJbJy4vJ11cIj5Mb2dvPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuLyddXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9hYm91dC9taXNzaW9uJ11cIj5BYm91dCBVczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9jb250ZW50J11cIj5Qcm9kdWN0czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9sb2NhdGlvbiddXCI+TG9jYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vYXV0aCddXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblwiPjwvc3Bhbj4gQWRtaW4gTG9naW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vYXV0aC9wcm9maWxlJ11cIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPiBTZXR0aW5nczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAqIHtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgICAgY29sb3I6IHdoaXRlOyAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UgPSBfYXV0aFNlcnZpY2U7XG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
