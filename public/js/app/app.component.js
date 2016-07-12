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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var home_list_component_1 = require("./home/home-list.component");
var about_component_1 = require("./about/about.component");
var location_component_1 = require("./location/location.component");
var category_component_1 = require("./category/category.component");
var authentication_component_1 = require("./auth/authentication.component");
var header_component_1 = require("./header.component");
var footer_component_1 = require("./footer.component");
var error_component_1 = require("./errors/error.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div id=\"wrapper\">\n            <my-header></my-header>\n            <div class=\"container\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>       \n            <my-footer></my-footer>\n        <my-error></my-error>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent, error_component_1.ErrorComponent]
        }),
        router_1.Routes([
            { path: '/', component: home_list_component_1.HomeListComponent },
            { path: '/about', component: about_component_1.AboutComponent },
            { path: '/product', component: category_component_1.CategoryComponent },
            { path: '/location', component: location_component_1.LocationComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCxvQ0FBa0MsNEJBQTRCLENBQUMsQ0FBQTtBQUMvRCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCxtQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUNsRSxtQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUNsRSx5Q0FBd0MsaUNBQWlDLENBQUMsQ0FBQTtBQUMxRSxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxnQ0FBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQXVCMUQ7SUFBQTtJQUVBLENBQUM7SUF4QkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLG1SQVNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSxrQ0FBZSxFQUFFLGdDQUFjLENBQUM7U0FDcEYsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUVKLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUM7WUFDekMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7WUFDaEQsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztZQUNqRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFDO1NBQ3RELENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tIFwiLi9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gXCIuL2Zvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSBcIi4vZXJyb3JzL2Vycm9yLmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICAgICAgIFxuICAgICAgICAgICAgPG15LWZvb3Rlcj48L215LWZvb3Rlcj5cbiAgICAgICAgPG15LWVycm9yPjwvbXktZXJyb3I+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudF1cbn0pXG5AUm91dGVzKFtcbiAgICBcbiAgICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL3Byb2R1Y3QnLCBjb21wb25lbnQ6IENhdGVnb3J5Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9sb2NhdGlvbicsIGNvbXBvbmVudDogTG9jYXRpb25Db21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2F1dGgnLCBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
