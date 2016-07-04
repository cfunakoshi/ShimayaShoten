import {Component, OnInit} from "@angular/core";
@Component({
	selector: 'my-location',
	template: `
		<div class="container-fluid">
  			<div class="row">
    			<div class="col-md-8 col-md-offset-2">
              <h2><u>Location</u></h2>
              <br><br>
      				<p><span class="glyphicon glyphicon-map-marker"></span> 710 Kohou St, Honolulu, HI 96817</p>
      				<p><span class="glyphicon glyphicon-phone"></span> (808)841-6611</p>
      				<div><a href="mailto:shimayashoten@gmail.com?Subject=Customer%20Inquiry" target="_top"><span class="glyphicon glyphicon-envelope"></span> shimayashoten@gmail.com </a></div>
              <br> 
    			</div>
			</div>
		</div>
		<div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div id="googleMap" style="height:400px;width:100%;"></div>	
      </div>
    </div>
	
	`,
    styles: [`
        .container-fluid {
          padding-top: 30px;
        }
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