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
            template: "\n        <div class=\"row spacing\">\n            <section class=\"col-md-6 col-md-offset-3\" *ngIf=\"!isLoggedIn()\">\n                <my-signin *ngIf=\"!isLoggedIn()\"></my-signin>\n            </section>\n            <nav class=\"col-md-3\">               \n                <ul class=\"nav nav-pills nav-stacked\" *ngIf=\"isLoggedIn()\">\n                    <li><a [routerLink]=\"['./profile']\" >Profile</a></li>                   \n                    <li><a [routerLink]=\"['./signup']\" >Create New User</a></li>\n                    <li><a [routerLink]=\"['./logout']\" >Logout</a></li>\n                </ul>\n            </nav>\n            <section class=\"col-md-7 col-md-offset-1\">\n                <router-outlet></router-outlet>\n            </section>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, signin_component_1.SigninComponent],
            styles: ["\n        .col-md-3 {\n            padding-top: 50px;\n        }\n        \n        .col-md-7 {\n            padding-top: 80px;\n        }\n\n        .col-md-6 {\n            padding-top: 80px;\n        }\n\n        .router-link-active {\n            background-color: black;\n            color: white;\n        }\n        \n        li a {\n            display: block;         \n        }\n\n        li a:hover {\n            background-color: black;\n            color: white;        \n        }\n    "]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/profile', component: profile_component_1.ProfileComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFzRDdDO0lBQ0ksaUNBQXFCLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUVsRCw0Q0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQTFETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsMnhCQWdCVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLENBQUM7WUFDaEQsTUFBTSxFQUFFLENBQUMsd2ZBMEJSLENBQUM7U0FDTCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUM7WUFDL0MsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1NBQ2hELENBQUM7OytCQUFBO0lBUUYsOEJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLCtCQUF1QiwwQkFPbkMsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tIFwiLi9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tIFwiLi9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9sb2dvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWF1dGgnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj5cbiAgICAgICAgICAgICAgICA8bXktc2lnbmluICpuZ0lmPVwiIWlzTG9nZ2VkSW4oKVwiPjwvbXktc2lnbmluPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC0zXCI+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxscyBuYXYtc3RhY2tlZFwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vcHJvZmlsZSddXCIgPlByb2ZpbGU8L2E+PC9saT4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vc2lnbnVwJ11cIiA+Q3JlYXRlIE5ldyBVc2VyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vbG9nb3V0J11cIiA+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtNyBjb2wtbWQtb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBTaWduaW5Db21wb25lbnRdLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmNvbC1tZC0zIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY29sLW1kLTcge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29sLW1kLTYge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsaSBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgbGkgYTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgICAgICAgIFxuICAgICAgICB9XG4gICAgYF1cbn0pXG5AUm91dGVzKFtcbiAgICB7cGF0aDogJy9zaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvcHJvZmlsZScsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvbG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
