import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {LocationComponent} from "./location/location.component";
import {ContentListComponent} from "./content/content-list.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { ErrorComponent } from "./errors/error.component";
@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
        <my-error></my-error>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
})
@Routes([
    
    {path: '/', component: HomeComponent},
    {path: '/about', component: AboutComponent},
    {path: '/content', component: ContentListComponent},
    {path: '/location', component: LocationComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {
    
}