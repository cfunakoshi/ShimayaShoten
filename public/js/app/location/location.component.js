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
            template: "\n\t\t<div class=\"container-fluid\">\n  \t\t\t<div class=\"row\">\n    \t\t\t<div class=\"col-md-8 col-md-offset-2\">\n              <h2><u>Location</u></h2>\n              <br><br>\n      \t\t\t\t<p><span class=\"glyphicon glyphicon-map-marker\"></span> 710 Kohou St, Honolulu, HI 96817</p>\n      \t\t\t\t<p><span class=\"glyphicon glyphicon-phone\"></span> (808)841-6611</p>\n      \t\t\t\t<div><a href=\"mailto:shimayashoten@gmail.com?Subject=Customer%20Inquiry\" target=\"_top\"><span class=\"glyphicon glyphicon-envelope\"></span> shimayashoten@gmail.com </a></div>\n              <br> \n    \t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <div id=\"googleMap\" style=\"height:400px;width:100%;\"></div>\t\n      </div>\n    </div>\n\t\n\t",
            styles: ["\n        .container-fluid {\n          padding-top: 30px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBNkJoRDtJQUFBO0lBa0JBLENBQUM7SUFoQkcsb0NBQVEsR0FBUjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUQsSUFBSSxPQUFPLEdBQUc7WUFDVixNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO1NBQzNDLENBQUM7UUFDRixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxRQUFRLEVBQUMsUUFBUTtTQUNwQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUE3Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHF6QkFtQlQ7WUFDRSxNQUFNLEVBQUUsQ0FBQyw2RUFJUixDQUFDO1NBQ0wsQ0FBQzs7eUJBQUE7SUFtQkYsd0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHlCQUFpQixvQkFrQjdCLENBQUEiLCJmaWxlIjoibG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWxvY2F0aW9uJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gIFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICBcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgIDxoMj48dT5Mb2NhdGlvbjwvdT48L2gyPlxuICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgXHRcdFx0XHQ8cD48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWFwLW1hcmtlclwiPjwvc3Bhbj4gNzEwIEtvaG91IFN0LCBIb25vbHVsdSwgSEkgOTY4MTc8L3A+XG4gICAgICBcdFx0XHRcdDxwPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1waG9uZVwiPjwvc3Bhbj4gKDgwOCk4NDEtNjYxMTwvcD5cbiAgICAgIFx0XHRcdFx0PGRpdj48YSBocmVmPVwibWFpbHRvOnNoaW1heWFzaG90ZW5AZ21haWwuY29tP1N1YmplY3Q9Q3VzdG9tZXIlMjBJbnF1aXJ5XCIgdGFyZ2V0PVwiX3RvcFwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVwiPjwvc3Bhbj4gc2hpbWF5YXNob3RlbkBnbWFpbC5jb20gPC9hPjwvZGl2PlxuICAgICAgICAgICAgICA8YnI+IFxuICAgIFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICA8ZGl2IGlkPVwiZ29vZ2xlTWFwXCIgc3R5bGU9XCJoZWlnaHQ6NDAwcHg7d2lkdGg6MTAwJTtcIj48L2Rpdj5cdFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cdFxuXHRgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgbmdPbkluaXQoKSB7ICAgICAgICBcbiAgICAgICAgdmFyIG15Q2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygyMS4zMjM1NjksIC0xNTcuODcyMjMxKTtcblxuICAgICAgICB2YXIgbWFwUHJvcCA9IHtcbiAgICAgICAgICAgIGNlbnRlcjogbXlDZW50ZXIsXG4gICAgICAgICAgICB6b29tOiAxNSxcbiAgICAgICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29nbGVNYXBcIiksIG1hcFByb3ApO1xuXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOm15Q2VudGVyLFxuICAgICAgICB9KTtcblxuICAgICAgICBtYXJrZXIuc2V0TWFwKG1hcCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
