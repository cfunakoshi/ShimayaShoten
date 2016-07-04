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
        	<section class="col-md-7 col-md-offset-1" class="text-center">
        		<router-outlet></router-outlet>
        	</section>
        </div>
	`,
	directives: [ROUTER_DIRECTIVES],
    styles: [`
        .col-md-3 {
            padding-top: 50px;
        }

        .router-link-active {
            background-color: black;
            color: white;
        }
        
        li a {
            display: block;         
        }

        li a:hover {
            background-color: black;
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