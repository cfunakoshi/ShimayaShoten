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
            template: "\n\t\t<div class=\"row spacing\">\n\t\t\t<nav class=\"col-md-3\">               \n                <ul class=\"nav nav-pills nav-stacked\">                   \n                    <li><a [routerLink]=\"['./mission']\">Mission</a></li>\n                    <li><a [routerLink]=\"['./history']\">History</a></li>\n                </ul>\n        \t</nav>\n        \t<section>\n        \t\t<router-outlet></router-outlet>\n        \t</section>\n        </div>\n\t",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .col-md-3 {\n            padding-top: 50px;\n        }       \n        \n        li a {\n            display: block;\n            color: #000084;         \n        }\n\n        li a:hover {\n            background-color: #FFCC00;\n            color: #FF2400;        \n        }\n\n        .router-link-active {\n            background-color: #FFCC00;\n            color: white;\n        }\n    "]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTVELHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2xFLHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBMENsRTtJQUFBO0lBQ0EsQ0FBQztJQTFDRDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsNGNBWVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUM1QixNQUFNLEVBQUUsQ0FBQyxzWkFtQlIsQ0FBQztTQUNMLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUM7U0FDdkQsQ0FBQzs7c0JBQUE7SUFFRixxQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksc0JBQWMsaUJBQzFCLENBQUEiLCJmaWxlIjoiYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBYm91dE1pc3Npb25Db21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC1taXNzaW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWJvdXRIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQtaGlzdG9yeS5jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWFib3V0Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cblx0XHRcdDxuYXYgY2xhc3M9XCJjb2wtbWQtM1wiPiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHMgbmF2LXN0YWNrZWRcIj4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vbWlzc2lvbiddXCI+TWlzc2lvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL2hpc3RvcnknXVwiPkhpc3Rvcnk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICBcdDwvbmF2PlxuICAgICAgICBcdDxzZWN0aW9uPlxuICAgICAgICBcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICBcdDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG5cdGAsXG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuY29sLW1kLTMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIH0gICAgICAgXG4gICAgICAgIFxuICAgICAgICBsaSBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwODQ7ICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsaSBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNDMDA7XG4gICAgICAgICAgICBjb2xvcjogI0ZGMjQwMDsgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQzAwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5AUm91dGVzKFtcbiAgICB7cGF0aDogJy9taXNzaW9uJywgY29tcG9uZW50OiBBYm91dE1pc3Npb25Db21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2hpc3RvcnknLCBjb21wb25lbnQ6IEFib3V0SGlzdG9yeUNvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
