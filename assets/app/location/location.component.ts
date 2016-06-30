import {Component, OnInit} from "@angular/core";
@Component({
	selector: 'my-location',
	template: `
		<div class="container-fluid bg-grey">
  			<h2>Location</h2>
  			<div class="row">
    			<div class="col-sm-5">
      				<p><span class="glyphicon glyphicon-map-marker"></span>710 Kohou St, Honolulu, HI 96817</p>
      				<p><span class="glyphicon glyphicon-phone"></span>(808)841-6611</p>
      				<p><span class="glyphicon glyphicon-envelope"></span>shimayashoten@gmail.com</p> 
    			</div>
			</div>
		</div>
		<div id="googleMap" style="height:400px;width:100%;"></div>	
	
	`,
    styles: [`
        
    `]
})
export class LocationComponent implements OnInit {
    
    ngOnInit() {        
        var myCenter = new google.maps.LatLng(21.323569, -157.872231);

        var mapProp = {
            center: myCenter,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        var marker = new google.maps.Marker({
            position:myCenter,
        });

        marker.setMap(map);
    }
}