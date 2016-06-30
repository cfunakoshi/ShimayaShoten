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
var error_service_1 = require("../errors/error.service");
var ContentComponent = (function () {
    function ContentComponent(_contentService, _errorService) {
        this._contentService = _contentService;
        this._errorService = _errorService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', content_1.Content)
    ], ContentComponent.prototype, "content", void 0);
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'my-content',
            template: "\n\t\t<article class=\"panel panel-default\">\n        \t<div class=\"panel-body\">\n        \t\t{{ content.item }}\n        \t</div>\n        \t<footer class=\"panel-footer\">\n        \t\t<div class=\"author\">\n        \t\t\t{{ content.price }}\n        \t\t</div>               \n        \t</footer>\n        </article>\n\t",
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, error_service_1.ErrorService])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUUvQyx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFDakQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUF3QnJEO0lBR0MsMEJBQW9CLGVBQStCLEVBQVUsYUFBMkI7UUFBcEUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRyxDQUFDO0lBRjVGO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQXhCVDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUseVVBV1Q7WUFDRSxNQUFNLEVBQUUsQ0FBQyxrS0FPUixDQUFDO1NBQ0wsQ0FBQzs7d0JBQUE7SUFLRix1QkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksd0JBQWdCLG1CQUk1QixDQUFBIiwiZmlsZSI6ImNvbnRlbnQvY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7Q29udGVudH0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHtDb250ZW50U2VydmljZX0gZnJvbSBcIi4vY29udGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1jb250ZW50Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgXHQ8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICBcdFx0e3sgY29udGVudC5pdGVtIH19XG4gICAgICAgIFx0PC9kaXY+XG4gICAgICAgIFx0PGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICBcdFx0PGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICBcdFx0XHR7eyBjb250ZW50LnByaWNlIH19XG4gICAgICAgIFx0XHQ8L2Rpdj4gICAgICAgICAgICAgICBcbiAgICAgICAgXHQ8L2Zvb3Rlcj5cbiAgICAgICAgPC9hcnRpY2xlPlxuXHRgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIGNvbnRlbnQ6IENvbnRlbnQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY29udGVudFNlcnZpY2U6IENvbnRlbnRTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
