import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { HomeListComponent } from "./home/home-list.component";
import { AboutComponent } from "./about/about.component";
import { LocationComponent } from "./location/location.component";
import { CategoryComponent } from "./category/category.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { ErrorComponent } from "./errors/error.component";
@Component({
    selector: 'my-app',
    template: ` 
        <div id="wrapper">
            <my-header></my-header>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>       
            <my-footer></my-footer>
        <my-error></my-error>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent, ErrorComponent]
})
@Routes([
    
    {path: '/', component: HomeListComponent},
    {path: '/about', component: AboutComponent},
    {path: '/product', component: CategoryComponent},
    {path: '/location', component: LocationComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {
    
}