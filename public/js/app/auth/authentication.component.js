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
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var logout_component_1 = require("./logout.component");
var profile_component_1 = require("./profile.component");
var content_add_component_1 = require("../content/content-add.component");
var auth_service_1 = require("./auth.service");
var AuthenticationComponent = (function () {
    function AuthenticationComponent(_authService) {
        this._authService = _authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            template: "\n        <div class=\"row spacing\">\n            <section class=\"col-md-6 col-md-offset-3\" *ngIf=\"!isLoggedIn()\">\n                <my-signin *ngIf=\"!isLoggedIn()\"></my-signin>\n            </section>\n            <nav class=\"col-md-3\">               \n                <ul class=\"nav nav-pills nav-stacked\" *ngIf=\"isLoggedIn()\">\n                    <li><a [routerLink]=\"['./profile']\" >Profile</a></li> \n                    <li><a [routerLink]=\"['./add-product']\" >Add Product</a></li>                   \n                    <li><a [routerLink]=\"['./signup']\" >Create New User</a></li>\n                    <li><a [routerLink]=\"['./logout']\" >Logout</a></li>\n                </ul>\n            </nav>\n            <section class=\"col-md-7 col-md-offset-1\">\n                <router-outlet></router-outlet>\n            </section>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, signin_component_1.SigninComponent],
            styles: ["\n        .col-md-3 {\n            padding-top: 50px;\n        }\n        \n        .col-md-7 {\n            padding-top: 80px;\n        }\n\n        .col-md-6 {\n            padding-top: 80px;\n        }\n\n        .router-link-active {\n            background-color: #FFCC00;\n            color: white;\n        }\n        \n        li a {\n            display: block;\n            color: #000084;           \n        }\n\n        li a:hover {\n            background-color: #FFCC00;           \n            color: #FF2400;       \n        }\n    "]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/profile', component: profile_component_1.ProfileComponent },
            { path: '/add-product', component: content_add_component_1.ContentAddComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsc0NBQW9DLGtDQUFrQyxDQUFDLENBQUE7QUFDdkUsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUF5RDdDO0lBQ0ksaUNBQXFCLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUVsRCw0Q0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQTdETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsaTNCQWlCVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLENBQUM7WUFDaEQsTUFBTSxFQUFFLENBQUMsdWlCQTJCUixDQUFDO1NBQ0wsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO1lBQy9DLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7WUFDdEQsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1NBQ2hELENBQUM7OytCQUFBO0lBUUYsOEJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLCtCQUF1QiwwQkFPbkMsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tIFwiLi9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tIFwiLi9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9sb2dvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRlbnRBZGRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29udGVudC9jb250ZW50LWFkZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWF1dGgnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj5cbiAgICAgICAgICAgICAgICA8bXktc2lnbmluICpuZ0lmPVwiIWlzTG9nZ2VkSW4oKVwiPjwvbXktc2lnbmluPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC0zXCI+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxscyBuYXYtc3RhY2tlZFwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vcHJvZmlsZSddXCIgPlByb2ZpbGU8L2E+PC9saT4gXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vYWRkLXByb2R1Y3QnXVwiID5BZGQgUHJvZHVjdDwvYT48L2xpPiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9zaWdudXAnXVwiID5DcmVhdGUgTmV3IFVzZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9sb2dvdXQnXVwiID5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC03IGNvbC1tZC1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFNpZ25pbkNvbXBvbmVudF0sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuY29sLW1kLTMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jb2wtbWQtNyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2wtbWQtNiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0MwMDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGkgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDg0OyAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsaSBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNDMDA7ICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbG9yOiAjRkYyNDAwOyAgICAgICBcbiAgICAgICAgfVxuICAgIGBdXG59KVxuQFJvdXRlcyhbXG4gICAge3BhdGg6ICcvc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL3Byb2ZpbGUnLCBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2FkZC1wcm9kdWN0JywgY29tcG9uZW50OiBDb250ZW50QWRkQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9sb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
