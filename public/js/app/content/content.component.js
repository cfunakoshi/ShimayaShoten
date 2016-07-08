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
            template: "\n\t\t<article class=\"panel panel-default\">\n            <br>\n            <div class=\"panel-header text-center\">\n                {{ content.item }}\n            </div>\n        \t<div class=\"panel-body\">    \t\t\n                    <img src=\"{{content.url}}\" alt=\"Image Not Available\"/>\n                    <div id=\"price\">\n                        <p style=\"font-style:italic;\"> Price: $ {{ content.price }} </p>\n                        <button class=\"btn btn-danger\" (click)=\"onDelete()\" *ngIf=\"isLoggedIn()\">Delete</button>\n                    </div> \n        \t</div>\n        </article>\n\t",
            styles: ["\n        img {\n            height: 100%;\n            width: 100%;\n            text-align: center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, auth_service_1.AuthService, error_service_1.ErrorService])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUUvQyx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFDakQsNkJBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUEwQnJEO0lBR0MsMEJBQW9CLGVBQStCLEVBQVUsWUFBeUIsRUFBVSxhQUEyQjtRQUF2RyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUU1SCxtQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkRyxVQUFVLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDM0IsVUFBVSxDQUFDLE1BQU0sQ0FDYixHQUFHLEVBQ0g7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBdkJKO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQTFCVDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsZ25CQWNUO1lBQ0UsTUFBTSxFQUFFLENBQUMsd0hBTVIsQ0FBQztTQUNMLENBQUM7O3dCQUFBO0lBMEJGLHVCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSx3QkFBZ0IsbUJBeUI1QixDQUFBIiwiZmlsZSI6ImNvbnRlbnQvY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7Q29udGVudH0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHtDb250ZW50U2VydmljZX0gZnJvbSBcIi4vY29udGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktY29udGVudCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge3sgY29udGVudC5pdGVtIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXHQ8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPiAgICBcdFx0XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tjb250ZW50LnVybH19XCIgYWx0PVwiSW1hZ2UgTm90IEF2YWlsYWJsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc3R5bGU6aXRhbGljO1wiPiBQcmljZTogJCB7eyBjb250ZW50LnByaWNlIH19IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICBcdDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG5cdGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Q29tcG9uZW50IHtcblx0QElucHV0KCkgY29udGVudDogQ29udGVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2UsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgICAgZmlsZXBpY2tlci5zZXRLZXkoJ0E5TGx4dXZFd1RvbWlYMzZuUmo0SXonKTtcblxuICAgICAgICB2YXIgdXJsID0gdGhpcy5jb250ZW50LnVybDtcbiAgICAgICAgZmlsZXBpY2tlci5yZW1vdmUoXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fY29udGVudFNlcnZpY2UuZGVsZXRlQ29udGVudCh0aGlzLmNvbnRlbnQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
