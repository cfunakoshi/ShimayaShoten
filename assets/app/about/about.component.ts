import {Component} from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { AboutMissionComponent } from "./about-mission.component";
import { AboutHistoryComponent } from "./about-history.component";
@Component({
	selector: 'my-about',
	template: `
		<div class="row spacing">
			<nav class="col-md-3">               
                <ul class="nav nav-pills nav-stacked">                   
                    <li><a [routerLink]="['./mission']">Mission</a></li>
                    <li><a [routerLink]="['./history']">History</a></li>
                </ul>
        	</nav>
        	<section>
        		<router-outlet></router-outlet>
        	</section>
        </div>
	`,
	directives: [ROUTER_DIRECTIVES],
    styles: [`
        .col-md-3 {
            padding-top: 50px;
        }       
        
        li a {
            display: block;
            color: #000084;         
        }

        li a:hover {
            background-color: #FFCC00;
            color: #FF2400;        
        }

        .router-link-active {
            background-color: #FFCC00;
            color: white;
        }
    `]
})
@Routes([
    {path: '/mission', component: AboutMissionComponent},
    {path: '/history', component: AboutHistoryComponent}
])
export class AboutComponent {
}