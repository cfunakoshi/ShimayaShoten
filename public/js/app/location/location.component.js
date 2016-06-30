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
var LocationComponent = (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
        var myCenter = new google.maps.LatLng(21.323569, -157.872231);
        var mapProp = {
            center: myCenter,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
        });
        marker.setMap(map);
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: 'my-location',
            template: "\n\t\t<div class=\"container-fluid bg-grey\">\n  \t\t\t<h2>Location</h2>\n  \t\t\t<div class=\"row\">\n    \t\t\t<div class=\"col-sm-5\">\n      \t\t\t\t<p><span class=\"glyphicon glyphicon-map-marker\"></span>710 Kohou St, Honolulu, HI 96817</p>\n      \t\t\t\t<p><span class=\"glyphicon glyphicon-phone\"></span>(808)841-6611</p>\n      \t\t\t\t<p><span class=\"glyphicon glyphicon-envelope\"></span>shimayashoten@gmail.com</p> \n    \t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"googleMap\" style=\"height:400px;width:100%;\"></div>\t\n\t\n\t",
            styles: ["\n        \n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBcUJoRDtJQUFBO0lBa0JBLENBQUM7SUFoQkcsb0NBQVEsR0FBUjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUQsSUFBSSxPQUFPLEdBQUc7WUFDVixNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO1NBQzNDLENBQUM7UUFDRixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxRQUFRLEVBQUMsUUFBUTtTQUNwQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFyQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLDJpQkFhVDtZQUNFLE1BQU0sRUFBRSxDQUFDLGtCQUVSLENBQUM7U0FDTCxDQUFDOzt5QkFBQTtJQW1CRix3QkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlkseUJBQWlCLG9CQWtCN0IsQ0FBQSIsImZpbGUiOiJsb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktbG9jYXRpb24nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgYmctZ3JleVwiPlxuICBcdFx0XHQ8aDI+TG9jYXRpb248L2gyPlxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICBcdFx0XHRcdDxwPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tYXAtbWFya2VyXCI+PC9zcGFuPjcxMCBLb2hvdSBTdCwgSG9ub2x1bHUsIEhJIDk2ODE3PC9wPlxuICAgICAgXHRcdFx0XHQ8cD48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGhvbmVcIj48L3NwYW4+KDgwOCk4NDEtNjYxMTwvcD5cbiAgICAgIFx0XHRcdFx0PHA+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXCI+PC9zcGFuPnNoaW1heWFzaG90ZW5AZ21haWwuY29tPC9wPiBcbiAgICBcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgaWQ9XCJnb29nbGVNYXBcIiBzdHlsZT1cImhlaWdodDo0MDBweDt3aWR0aDoxMDAlO1wiPjwvZGl2Plx0XG5cdFxuXHRgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgXG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuICAgIG5nT25Jbml0KCkgeyAgICAgICAgXG4gICAgICAgIHZhciBteUNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMjEuMzIzNTY5LCAtMTU3Ljg3MjIzMSk7XG5cbiAgICAgICAgdmFyIG1hcFByb3AgPSB7XG4gICAgICAgICAgICBjZW50ZXI6IG15Q2VudGVyLFxuICAgICAgICAgICAgem9vbTogMTUsXG4gICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29vZ2xlTWFwXCIpLCBtYXBQcm9wKTtcblxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjpteUNlbnRlcixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFya2VyLnNldE1hcChtYXApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
