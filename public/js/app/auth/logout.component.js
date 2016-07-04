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
var auth_service_1 = require("./auth.service");
var LogoutComponent = (function () {
    function LogoutComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    LogoutComponent.prototype.onLogout = function () {
        this._authService.logout();
        this._router.navigate(['/auth']);
    };
    LogoutComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'my-logout',
            template: "\n    \t\t<div class=\"text-center\" *ngIf=\"isLoggedIn()\">\n                <div class=\"jumbotron\">\n                    <h2>Are you sure you want to log out?</h2>\n                    <br>\n            \t   <button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n                </div>\n            </div>\n    ",
            styles: ["\n    \t\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBaUI3QztJQUNJLHlCQUFvQixZQUF5QixFQUFVLE9BQWU7UUFBbEQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQztJQUUxRSxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBekJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSwrVUFRVDtZQUNELE1BQU0sRUFBRSxDQUFDLGdCQUVSLENBQUM7U0FDTCxDQUFDOzt1QkFBQTtJQVlGLHNCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx1QkFBZSxrQkFXM0IsQ0FBQSIsImZpbGUiOiJhdXRoL2xvZ291dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWxvZ291dCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdFx0PGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbG9nIG91dD88L2gyPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICBcdCAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICBcdFxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICAgIG9uTG9nb3V0KCkge1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
