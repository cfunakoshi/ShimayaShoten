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
var auth_service_1 = require("./auth.service");
var ProfileComponent = (function () {
    function ProfileComponent(_authService) {
        this._authService = _authService;
    }
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'my-logout',
            template: "\n    \t\t<div class=\"text-center\">\n                \n            </div>\n    ",
            styles: ["\n    \t\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQWE3QztJQUNJLDBCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7SUFackQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLG1GQUlUO1lBQ0QsTUFBTSxFQUFFLENBQUMsZ0JBRVIsQ0FBQztTQUNMLENBQUM7O3dCQUFBO0lBR0YsdUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHdCQUFnQixtQkFFNUIsQ0FBQSIsImZpbGUiOiJhdXRoL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1sb2dvdXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgXHRcbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
