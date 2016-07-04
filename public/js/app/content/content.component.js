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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUUvQyx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFDakQsNkJBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUF5Q3JEO0lBR0MsMEJBQW9CLGVBQStCLEVBQVUsWUFBeUIsRUFBVSxhQUEyQjtRQUF2RyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUU1SCxtQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFkSjtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUF6Q1Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLG1xQkFnQlQ7WUFDRSxNQUFNLEVBQUUsQ0FBQyw4WkFtQlIsQ0FBQztTQUNMLENBQUM7O3dCQUFBO0lBaUJGLHVCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSx3QkFBZ0IsbUJBZ0I1QixDQUFBIiwiZmlsZSI6ImNvbnRlbnQvY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7Q29udGVudH0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHtDb250ZW50U2VydmljZX0gZnJvbSBcIi4vY29udGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktY29udGVudCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge3sgY29udGVudC5pdGVtIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXHQ8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPiAgICBcdFx0XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tjb250ZW50LnVybH19XCIgYWx0PVwiSW1hZ2UgTm90IEF2YWlsYWJsZVwiLz5cbiAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgXHQ8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwicHJpY2VcIj5cbiAgICAgICAgXHRcdFx0PHAgc3R5bGU9XCJmb250LXN0eWxlOml0YWxpYztcIj4gUHJpY2U6ICQge3sgY29udGVudC5wcmljZSB9fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgXHRcdDwvZGl2PiAgICAgICAgICAgICAgIFxuICAgICAgICBcdDwvZm9vdGVyPlxuICAgICAgICA8L2FydGljbGU+XG5cdGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAucGFuZWwtYm9keSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgICAgICAgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Q29tcG9uZW50IHtcblx0QElucHV0KCkgY29udGVudDogQ29udGVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2UsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fY29udGVudFNlcnZpY2UuZGVsZXRlQ29udGVudCh0aGlzLmNvbnRlbnQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
