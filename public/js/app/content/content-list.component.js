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
var content_component_1 = require("./content.component");
var content_add_component_1 = require("./content-add.component");
var content_service_1 = require("./content.service");
var auth_service_1 = require("../auth/auth.service");
var error_service_1 = require("../errors/error.service");
var ContentListComponent = (function () {
    function ContentListComponent(_contentService, _authService, _errorService) {
        this._contentService = _contentService;
        this._authService = _authService;
        this._errorService = _errorService;
    }
    ContentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contentService.getContent()
            .subscribe(function (items) {
            _this.items = items;
            _this._contentService.items = items;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ContentListComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    ContentListComponent = __decorate([
        core_1.Component({
            selector: 'my-content-list',
            template: "\n      <div class=\"container\">\n        <ul>\n\t\t\t     <my-content *ngFor=\"let item of items\" [content]=\"item\" class=\"list-group\"></my-content>\n        </ul>\n        <section class=\"col-md-8 col-md-offset-2\" *ngIf=\"isLoggedIn()\">  \n          <div id=\"content-add\">\n            <my-content-add></my-content-add>\n          </div>\n        </section>\n      </div>\n\t",
            directives: [content_component_1.ContentComponent, content_add_component_1.ContentAddComponent],
            styles: ["\n        .container {\n          padding-top: 30px;\n        }\n\n        .list-group {\n            display: inline-block;\n            padding-left: 20px;\n        }\n        \n        img {\n          height: 50px;\n          width: 70px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, auth_service_1.AuthService, error_service_1.ErrorService])
    ], ContentListComponent);
    return ContentListComponent;
}());
exports.ContentListComponent = ContentListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBR2hELGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzlELGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBZ0NyRDtJQUVFLDhCQUFvQixlQUErQixFQUFVLFlBQXlCLEVBQVUsYUFBMkI7UUFBdkcsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFJaEksdUNBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUU7YUFDL0IsU0FBUyxDQUNSLFVBQUEsS0FBSztZQUNMLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDOUMsQ0FBQztJQUVKLENBQUM7SUFFQSx5Q0FBVSxHQUFWO1FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQW5ETDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxxWUFXVDtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixFQUFFLDJDQUFtQixDQUFDO1lBQ25ELE1BQU0sRUFBRSxDQUFDLHFRQWNMLENBQUM7U0FDTCxDQUFDOzs0QkFBQTtJQXNCRiwyQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksNEJBQW9CLHVCQXFCaEMsQ0FBQSIsImZpbGUiOiJjb250ZW50L2NvbnRlbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge0NvbnRlbnR9IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7Q29udGVudENvbXBvbmVudH0gZnJvbSBcIi4vY29udGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRlbnRBZGRDb21wb25lbnQgfSBmcm9tIFwiLi9jb250ZW50LWFkZC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udGVudFNlcnZpY2V9IGZyb20gXCIuL2NvbnRlbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWNvbnRlbnQtbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDx1bD5cblx0XHRcdCAgICAgPG15LWNvbnRlbnQgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBbY29udGVudF09XCJpdGVtXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCI+PC9teS1jb250ZW50PlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+ICBcbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1hZGRcIj5cbiAgICAgICAgICAgIDxteS1jb250ZW50LWFkZD48L215LWNvbnRlbnQtYWRkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cblx0YCwgXG5cdGRpcmVjdGl2ZXM6IFtDb250ZW50Q29tcG9uZW50LCBDb250ZW50QWRkQ29tcG9uZW50XSxcblx0c3R5bGVzOiBbYFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXN0LWdyb3VwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGVudFNlcnZpY2U6IENvbnRlbnRTZXJ2aWNlLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG5cdGl0ZW1zOiBDb250ZW50W107XHRcblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLl9jb250ZW50U2VydmljZS5nZXRDb250ZW50KClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCBpdGVtcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pdGVtcyA9IGl0ZW1zO1xuXHRcdFx0XHRcdHRoaXMuX2NvbnRlbnRTZXJ2aWNlLml0ZW1zID0gaXRlbXM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcblx0XHRcdCk7XG5cblx0fVxuXG4gIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
