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
var content_service_1 = require("./content.service");
var error_service_1 = require("../errors/error.service");
var ContentListComponent = (function () {
    function ContentListComponent(_contentService, _errorService) {
        this._contentService = _contentService;
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
    ContentListComponent = __decorate([
        core_1.Component({
            selector: 'my-content-list',
            template: "\n\t\t<ul>\n\t\t\t<my-content *ngFor=\"let item of items\" [content]=\"item\" class=\"list-group\"></my-content>\n        </ul>\n\t",
            directives: [content_component_1.ContentComponent],
            styles: ["\n        .list-group {\n            display: inline-block;\n            padding-left: 20px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, error_service_1.ErrorService])
    ], ContentListComponent);
    return ContentListComponent;
}());
exports.ContentListComponent = ContentListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBR2hELGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBZ0JyRDtJQUVDLDhCQUFvQixlQUErQixFQUFVLGFBQTJCO1FBQXBFLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUk1Rix1Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTthQUMvQixTQUFTLENBQ1IsVUFBQSxLQUFLO1lBQ0wsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUM5QyxDQUFDO0lBQ0osQ0FBQztJQTlCRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxxSUFJVDtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1lBQzlCLE1BQU0sRUFBRSxDQUFDLCtHQUtMLENBQUM7U0FDTCxDQUFDOzs0QkFBQTtJQWlCRiwyQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksNEJBQW9CLHVCQWdCaEMsQ0FBQSIsImZpbGUiOiJjb250ZW50L2NvbnRlbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge0NvbnRlbnR9IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7Q29udGVudENvbXBvbmVudH0gZnJvbSBcIi4vY29udGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udGVudFNlcnZpY2V9IGZyb20gXCIuL2NvbnRlbnQuc2VydmljZVwiO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktY29udGVudC1saXN0Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8dWw+XG5cdFx0XHQ8bXktY29udGVudCAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIFtjb250ZW50XT1cIml0ZW1cIiBjbGFzcz1cImxpc3QtZ3JvdXBcIj48L215LWNvbnRlbnQ+XG4gICAgICAgIDwvdWw+XG5cdGAsIFxuXHRkaXJlY3RpdmVzOiBbQ29udGVudENvbXBvbmVudF0sXG5cdHN0eWxlczogW2BcbiAgICAgICAgLmxpc3QtZ3JvdXAge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRlbnRTZXJ2aWNlOiBDb250ZW50U2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cblx0aXRlbXM6IENvbnRlbnRbXTtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLl9jb250ZW50U2VydmljZS5nZXRDb250ZW50KClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCBpdGVtcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pdGVtcyA9IGl0ZW1zO1xuXHRcdFx0XHRcdHRoaXMuX2NvbnRlbnRTZXJ2aWNlLml0ZW1zID0gaXRlbXM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcblx0XHRcdCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
