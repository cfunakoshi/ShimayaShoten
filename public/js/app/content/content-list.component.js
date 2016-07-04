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
            styles: ["\n        .container {\n          padding-top: 30px;\n        }\n\n        .list-group {\n            display: inline-block;\n            padding-left: 20px;\n        }\n        \n        img {\n          height: 50px;\n          width: 70px;\n        }\n\n        #content-add {\n          padding-top: 50px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, auth_service_1.AuthService, error_service_1.ErrorService])
    ], ContentListComponent);
    return ContentListComponent;
}());
exports.ContentListComponent = ContentListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBR2hELGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzlELGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBb0NyRDtJQUVFLDhCQUFvQixlQUErQixFQUFVLFlBQXlCLEVBQVUsYUFBMkI7UUFBdkcsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFJaEksdUNBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUU7YUFDL0IsU0FBUyxDQUNSLFVBQUEsS0FBSztZQUNMLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDOUMsQ0FBQztJQUVKLENBQUM7SUFFQSx5Q0FBVSxHQUFWO1FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQXZETDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxxWUFXVDtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixFQUFFLDJDQUFtQixDQUFDO1lBQ25ELE1BQU0sRUFBRSxDQUFDLHdVQWtCTCxDQUFDO1NBQ0wsQ0FBQzs7NEJBQUE7SUFzQkYsMkJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLDRCQUFvQix1QkFxQmhDLENBQUEiLCJmaWxlIjoiY29udGVudC9jb250ZW50LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtDb250ZW50fSBmcm9tIFwiLi9jb250ZW50XCI7XG5pbXBvcnQge0NvbnRlbnRDb21wb25lbnR9IGZyb20gXCIuL2NvbnRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb250ZW50QWRkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGVudC1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRlbnRTZXJ2aWNlfSBmcm9tIFwiLi9jb250ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1jb250ZW50LWxpc3QnLFxuXHR0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8dWw+XG5cdFx0XHQgICAgIDxteS1jb250ZW50ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgW2NvbnRlbnRdPVwiaXRlbVwiIGNsYXNzPVwibGlzdC1ncm91cFwiPjwvbXktY29udGVudD5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPiAgXG4gICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtYWRkXCI+XG4gICAgICAgICAgICA8bXktY29udGVudC1hZGQ+PC9teS1jb250ZW50LWFkZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cdGAsIFxuXHRkaXJlY3RpdmVzOiBbQ29udGVudENvbXBvbmVudCwgQ29udGVudEFkZENvbXBvbmVudF0sXG5cdHN0eWxlczogW2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGlzdC1ncm91cCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbnRlbnQtYWRkIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2UsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cblx0aXRlbXM6IENvbnRlbnRbXTtcdFxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuX2NvbnRlbnRTZXJ2aWNlLmdldENvbnRlbnQoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0IGl0ZW1zID0+IHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XG5cdFx0XHRcdFx0dGhpcy5fY29udGVudFNlcnZpY2UuaXRlbXMgPSBpdGVtcztcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuXHRcdFx0KTtcblxuXHR9XG5cbiAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
