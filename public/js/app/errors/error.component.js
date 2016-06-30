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
var error_service_1 = require("./error.service");
var ErrorComponent = (function () {
    function ErrorComponent(_errorService) {
        this._errorService = _errorService;
        this.errorDisplay = 'none';
    }
    ErrorComponent.prototype.onErrorHandled = function () {
        this.errorDisplay = 'none';
    };
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._errorService.errorOccurred.subscribe(function (errorData) {
            _this.errorData = errorData;
            _this.errorDisplay = 'block';
        });
    };
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'my-error',
            template: "\n        <div class=\"backdrop\" [ngStyle]=\"{'display': errorDisplay}\"></div>\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': errorDisplay}\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onErrorHandled()\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\">{{errorData?.title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                     <p>{{errorData?.message}}</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onErrorHandled()\">Close</button>\n                    </div>\n                </div><!-- /.modal-content -->\n            </div><!-- /.modal-dialog -->\n        </div><!-- /.modal -->  \n    ",
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQWlDL0M7SUFJSSx3QkFBcUIsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFIaEQsaUJBQVksR0FBRyxNQUFNLENBQUM7SUFHNkIsQ0FBQztJQUVwRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDeEMsVUFBQSxTQUFTO1lBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDaEMsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBakRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSwyaENBa0JUO1lBQ0QsTUFBTSxFQUFFLENBQUMsdU5BU1IsQ0FBQztTQUNMLENBQUM7O3NCQUFBO0lBbUJGLHFCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSxzQkFBYyxpQkFrQjFCLENBQUEiLCJmaWxlIjoiZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRXJyb3IgfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4vZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1lcnJvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZXJyb3JEaXNwbGF5fVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGVycm9yRGlzcGxheX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cIm9uRXJyb3JIYW5kbGVkKClcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e2Vycm9yRGF0YT8udGl0bGV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgPHA+e3tlcnJvckRhdGE/Lm1lc3NhZ2V9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uRXJyb3JIYW5kbGVkKClcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwtY29udGVudCAtLT5cbiAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1kaWFsb2cgLS0+XG4gICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbCAtLT4gIFxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuYmFja2Ryb3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvckRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZXJyb3JEYXRhOiBFcnJvcjtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cblxuICAgIG9uRXJyb3JIYW5kbGVkKCkge1xuICAgICAgICB0aGlzLmVycm9yRGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZXJyb3JTZXJ2aWNlLmVycm9yT2NjdXJyZWQuc3Vic2NyaWJlKFxuICAgICAgICAgIGVycm9yRGF0YSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JEYXRhID0gZXJyb3JEYXRhO1xuICAgICAgICAgICAgICB0aGlzLmVycm9yRGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
