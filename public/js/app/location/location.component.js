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
            template: "\n\t\t<div class=\"container-fluid\">\n  \t\t\t<div class=\"row\">\n    \t\t\t<div class=\"col-md-8 col-md-offset-2\">\n              <h2><u>Location</u>:</h2>\n              <br><br>\n      \t\t\t\t<p><span class=\"glyphicon glyphicon-map-marker\"></span> 710 Kohou St, Honolulu, HI 96817</p>\n      \t\t\t\t<p><span class=\"glyphicon glyphicon-phone\"></span> (808)841-6611</p>\n      \t\t\t\t<div><a href=\"mailto:shimayashoten@gmail.com?Subject=Customer%20Inquiry\" target=\"_top\"><span class=\"glyphicon glyphicon-envelope\"></span> shimayashoten@gmail.com </a></div>\n              <br> \n    \t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <div id=\"googleMap\" style=\"height:400px;width:100%;\"></div>\t\n      </div>\n    </div>\n\t\n\t",
            styles: ["\n        .container-fluid {\n          padding-top: 30px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBNkJoRDtJQUFBO0lBa0JBLENBQUM7SUFoQkcsb0NBQVEsR0FBUjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUQsSUFBSSxPQUFPLEdBQUc7WUFDVixNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO1NBQzNDLENBQUM7UUFDRixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxRQUFRLEVBQUMsUUFBUTtTQUNwQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUE3Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHN6QkFtQlQ7WUFDRSxNQUFNLEVBQUUsQ0FBQyw2RUFJUixDQUFDO1NBQ0wsQ0FBQzs7eUJBQUE7SUFtQkYsd0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHlCQUFpQixvQkFrQjdCLENBQUEiLCJmaWxlIjoibG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWxvY2F0aW9uJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gIFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICBcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgIDxoMj48dT5Mb2NhdGlvbjwvdT46PC9oMj5cbiAgICAgICAgICAgICAgPGJyPjxicj5cbiAgICAgIFx0XHRcdFx0PHA+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1hcC1tYXJrZXJcIj48L3NwYW4+IDcxMCBLb2hvdSBTdCwgSG9ub2x1bHUsIEhJIDk2ODE3PC9wPlxuICAgICAgXHRcdFx0XHQ8cD48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGhvbmVcIj48L3NwYW4+ICg4MDgpODQxLTY2MTE8L3A+XG4gICAgICBcdFx0XHRcdDxkaXY+PGEgaHJlZj1cIm1haWx0bzpzaGltYXlhc2hvdGVuQGdtYWlsLmNvbT9TdWJqZWN0PUN1c3RvbWVyJTIwSW5xdWlyeVwiIHRhcmdldD1cIl90b3BcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcIj48L3NwYW4+IHNoaW1heWFzaG90ZW5AZ21haWwuY29tIDwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgPGJyPiBcbiAgICBcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgPGRpdiBpZD1cImdvb2dsZU1hcFwiIHN0eWxlPVwiaGVpZ2h0OjQwMHB4O3dpZHRoOjEwMCU7XCI+PC9kaXY+XHRcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXHRcblx0YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuICAgIG5nT25Jbml0KCkgeyAgICAgICAgXG4gICAgICAgIHZhciBteUNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMjEuMzIzNTY5LCAtMTU3Ljg3MjIzMSk7XG5cbiAgICAgICAgdmFyIG1hcFByb3AgPSB7XG4gICAgICAgICAgICBjZW50ZXI6IG15Q2VudGVyLFxuICAgICAgICAgICAgem9vbTogMTUsXG4gICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29vZ2xlTWFwXCIpLCBtYXBQcm9wKTtcblxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjpteUNlbnRlcixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFya2VyLnNldE1hcChtYXApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
