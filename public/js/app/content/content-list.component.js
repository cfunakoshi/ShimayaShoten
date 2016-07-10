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
var router_1 = require('@angular/router');
var content_component_1 = require("./content.component");
var content_service_1 = require("./content.service");
var auth_service_1 = require("../auth/auth.service");
var error_service_1 = require("../errors/error.service");
var ContentListComponent = (function () {
    function ContentListComponent(routeSegment, _contentService, _authService, _errorService) {
        this._contentService = _contentService;
        this._authService = _authService;
        this._errorService = _errorService;
        this.category = routeSegment.getParam('id');
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
            template: "\n      <div class=\"container\">\n        <ul>\n          <template ngFor let-item=\"$implicit\" [ngForOf]=\"items\">\n             <li *ngIf=\"item.category == category\"><my-content [content]=\"item\"></my-content></li>\n          </template>\n        </ul>\n      </div>\n\t",
            directives: [content_component_1.ContentComponent],
            styles: ["\n        .container {\n          padding-top: 30px;\n        }\n\n        ul {\n          margin: 0;\n          padding-left: 0;\n        }\n        \n        ul li{\n          width: 19.66%;\n          display: inline-block;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.RouteSegment, content_service_1.ContentService, auth_service_1.AuthService, error_service_1.ErrorService])
    ], ContentListComponent);
    return ContentListComponent;
}());
exports.ContentListComponent = ContentListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRy9DLGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBNkJ2RDtJQUtFLDhCQUFZLFlBQTBCLEVBQVUsZUFBK0IsRUFBVSxZQUF5QixFQUFVLGFBQTJCO1FBQXZHLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDckosSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRix1Q0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTthQUMvQixTQUFTLENBQ1IsVUFBQSxLQUFLO1lBQ0wsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUM5QyxDQUFDO0lBRUosQ0FBQztJQUVBLHlDQUFVLEdBQVY7UUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBbkRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLHdSQVFUO1lBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDOUIsTUFBTSxFQUFFLENBQUMscVBBY0wsQ0FBQztTQUNMLENBQUM7OzRCQUFBO0lBeUJGLDJCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSw0QkFBb0IsdUJBd0JoQyxDQUFBIiwiZmlsZSI6ImNvbnRlbnQvY29udGVudC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZVNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge0NvbnRlbnR9IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7Q29udGVudENvbXBvbmVudH0gZnJvbSBcIi4vY29udGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRlbnRTZXJ2aWNlIH0gZnJvbSBcIi4vY29udGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1jb250ZW50LWxpc3QnLFxuXHR0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPHRlbXBsYXRlIG5nRm9yIGxldC1pdGVtPVwiJGltcGxpY2l0XCIgW25nRm9yT2ZdPVwiaXRlbXNcIj5cbiAgICAgICAgICAgICA8bGkgKm5nSWY9XCJpdGVtLmNhdGVnb3J5ID09IGNhdGVnb3J5XCI+PG15LWNvbnRlbnQgW2NvbnRlbnRdPVwiaXRlbVwiPjwvbXktY29udGVudD48L2xpPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblx0YCwgXG5cdGRpcmVjdGl2ZXM6IFtDb250ZW50Q29tcG9uZW50XSxcblx0c3R5bGVzOiBbYFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB1bCBsaXtcbiAgICAgICAgICB3aWR0aDogMTkuNjYlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjYXRlZ29yeTogc3RyaW5nO1xuICBpdGVtczogQ29udGVudFtdO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlU2VnbWVudDogUm91dGVTZWdtZW50LCBwcml2YXRlIF9jb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2UsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHtcbiAgICB0aGlzLmNhdGVnb3J5ID0gcm91dGVTZWdtZW50LmdldFBhcmFtKCdpZCcpO1xuICB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5fY29udGVudFNlcnZpY2UuZ2V0Q29udGVudCgpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQgaXRlbXMgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcblx0XHRcdFx0XHR0aGlzLl9jb250ZW50U2VydmljZS5pdGVtcyA9IGl0ZW1zO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG5cdFx0XHQpO1xuXG5cdH1cblxuICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
