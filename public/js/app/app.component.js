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
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var location_component_1 = require("./location/location.component");
var content_list_component_1 = require("./content/content-list.component");
var authentication_component_1 = require("./auth/authentication.component");
var header_component_1 = require("./header.component");
var error_component_1 = require("./errors/error.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div class=\"container\">\n            <my-header></my-header>\n            <router-outlet></router-outlet>\n        </div>\n        <my-error></my-error>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, error_component_1.ErrorComponent]
        }),
        router_1.Routes([
            { path: '/', component: home_component_1.HomeComponent },
            { path: '/about', component: about_component_1.AboutComponent },
            { path: '/content', component: content_list_component_1.ContentListComponent },
            { path: '/location', component: location_component_1.LocationComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCwrQkFBNEIsdUJBQXVCLENBQUMsQ0FBQTtBQUNwRCxnQ0FBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxtQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQUNoRSx1Q0FBbUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN0RSx5Q0FBd0MsaUNBQWlDLENBQUMsQ0FBQTtBQUMxRSxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxnQ0FBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQW9CMUQ7SUFBQTtJQUVBLENBQUM7SUFyQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDZLQU1UO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSxnQ0FBYyxDQUFDO1NBQ25FLENBQUM7UUFDRCxlQUFNLENBQUM7WUFFSixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7WUFDckMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUM7WUFDbkQsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztZQUNqRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFDO1NBQ3RELENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9jYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250ZW50TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGVudC9jb250ZW50LWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gXCIuL2Vycm9ycy9lcnJvci5jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxteS1lcnJvcj48L215LWVycm9yPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBIZWFkZXJDb21wb25lbnQsIEVycm9yQ29tcG9uZW50XVxufSlcbkBSb3V0ZXMoW1xuICAgIFxuICAgIHtwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9jb250ZW50JywgY29tcG9uZW50OiBDb250ZW50TGlzdENvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvbG9jYXRpb24nLCBjb21wb25lbnQ6IExvY2F0aW9uQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9hdXRoJywgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
