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
var router_1 = require("@angular/router");
var about_mission_component_1 = require("./about-mission.component");
var about_history_component_1 = require("./about-history.component");
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'my-about',
            template: "\n\t\t<div class=\"row spacing\">\n\t\t\t<nav class=\"col-md-3\">               \n                <ul class=\"nav nav-pills nav-stacked\">                   \n                    <li><a [routerLink]=\"['./mission']\">Mission</a></li>\n                    <li><a [routerLink]=\"['./history']\">History</a></li>\n                </ul>\n        \t</nav>\n        \t<section class=\"col-md-7 col-md-offset-1\" class=\"text-center\">\n        \t\t<router-outlet></router-outlet>\n        \t</section>\n        </div>\n\t",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .col-md-3 {\n            padding-top: 50px;\n        }\n\n        .router-link-active {\n            background-color: black;\n            color: white;\n        }\n        \n        li a {\n            display: block;         \n        }\n\n        li a:hover {\n            background-color: black;\n            color: white;        \n        }\n    "]
        }),
        router_1.Routes([
            { path: '/mission', component: about_mission_component_1.AboutMissionComponent },
            { path: '/history', component: about_history_component_1.AboutHistoryComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTVELHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2xFLHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBeUNsRTtJQUFBO0lBQ0EsQ0FBQztJQXpDRDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUscWdCQVlUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDNUIsTUFBTSxFQUFFLENBQUMsNFdBa0JSLENBQUM7U0FDTCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQztZQUNwRCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFDO1NBQ3ZELENBQUM7O3NCQUFBO0lBRUYscUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHNCQUFjLGlCQUMxQixDQUFBIiwiZmlsZSI6ImFib3V0L2Fib3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQWJvdXRNaXNzaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQtbWlzc2lvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFib3V0SGlzdG9yeUNvbXBvbmVudCB9IGZyb20gXCIuL2Fib3V0LWhpc3RvcnkuY29tcG9uZW50XCI7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1hYm91dCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG5cdFx0XHQ8bmF2IGNsYXNzPVwiY29sLW1kLTNcIj4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzIG5hdi1zdGFja2VkXCI+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL21pc3Npb24nXVwiPk1pc3Npb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9oaXN0b3J5J11cIj5IaXN0b3J5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgXHQ8L25hdj5cbiAgICAgICAgXHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC03IGNvbC1tZC1vZmZzZXQtMVwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgXHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgXHQ8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmNvbC1tZC0zIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGkgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7ICAgICAgICBcbiAgICAgICAgfVxuICAgIGBdXG59KVxuQFJvdXRlcyhbXG4gICAge3BhdGg6ICcvbWlzc2lvbicsIGNvbXBvbmVudDogQWJvdXRNaXNzaW9uQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9oaXN0b3J5JywgY29tcG9uZW50OiBBYm91dEhpc3RvcnlDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
