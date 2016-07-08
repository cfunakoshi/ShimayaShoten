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
            template: "\n        <header class=\"row\">\n            <nav class=\"navbar navbar-inverse\">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" [routerLink]=\"['./']\"><img src=\"/favicon.ico\" alt=\"Shimaya Shoten Ltd.\">\n        </a>\n                    </div>\n                     <ul class=\"nav navbar-nav\">\n                        <li><a [routerLink]=\"['./']\">Home</a></li>\n                        <li><a [routerLink]=\"['./about/mission']\">About Us</a></li>\n                        <li><a [routerLink]=\"['./content']\">Products</a></li>\n                        <li><a [routerLink]=\"['./location']\">Location</a></li>\n                     </ul>\n                     <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a [routerLink]=\"['./auth']\" *ngIf=\"!isLoggedIn()\"><span class=\"glyphicon glyphicon-log-in\"></span> Admin Login</a></li>\n                        <li><a [routerLink]=\"['./auth/profile']\" *ngIf=\"isLoggedIn()\"><span class=\"glyphicon glyphicon-user\"></span> Settings</a></li>\n                     </ul>\n                </div>\n            </nav>\n        </header>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        ul {\n            text-align: center;\n        }\n\n        li {\n            float: none;\n            display: inline-block;\n        }\n\n        li a {\n            color: #000084;\n        }\n\n        li a:hover {\n            color: #FF2400;\n        }\n\n        .router-link-active {\n            color: #FF2400;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCw2QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQWlEaEQ7SUFFQSx5QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBeERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxpc0NBcUJUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsOFZBcUJSLENBQUM7U0FDTCxDQUFDOzt1QkFBQTtJQVdGLHNCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSx1QkFBZSxrQkFVM0IsQ0FBQSIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIFtyb3V0ZXJMaW5rXT1cIlsnLi8nXVwiPjxpbWcgc3JjPVwiL2Zhdmljb24uaWNvXCIgYWx0PVwiU2hpbWF5YSBTaG90ZW4gTHRkLlwiPlxuICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vJ11cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL2Fib3V0L21pc3Npb24nXVwiPkFib3V0IFVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL2NvbnRlbnQnXVwiPlByb2R1Y3RzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL2xvY2F0aW9uJ11cIj5Mb2NhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9hdXRoJ11cIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLWluXCI+PC9zcGFuPiBBZG1pbiBMb2dpbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9hdXRoL3Byb2ZpbGUnXVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcIj48L3NwYW4+IFNldHRpbmdzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDA4NDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNGRjI0MDA7XG4gICAgICAgIH1cblxuICAgICAgICAucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkYyNDAwO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlID0gX2F1dGhTZXJ2aWNlO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
