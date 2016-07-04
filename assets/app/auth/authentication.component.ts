import { Component } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
import { ProfileComponent } from "./profile.component";
import { AuthService } from "./auth.service";
@Component({
    selector: 'my-auth',
    template: `
        <div class="row spacing">
            <section class="col-md-6 col-md-offset-3" *ngIf="!isLoggedIn()">
                <my-signin *ngIf="!isLoggedIn()"></my-signin>
            </section>
            <nav class="col-md-3">               
                <ul class="nav nav-pills nav-stacked" *ngIf="isLoggedIn()">
                    <li><a [routerLink]="['./profile']" >Profile</a></li>                   
                    <li><a [routerLink]="['./signup']" >Create New User</a></li>
                    <li><a [routerLink]="['./logout']" >Logout</a></li>
                </ul>
            </nav>
            <section class="col-md-7 col-md-offset-1">
                <router-outlet></router-outlet>
            </section>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, SigninComponent],
    styles: [`
        .col-md-3 {
            padding-top: 50px;
        }
        
        .col-md-7 {
            padding-top: 80px;
        }

        .col-md-6 {
            padding-top: 80px;
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
    {path: '/signup', component: SignupComponent},
    {path: '/profile', component: ProfileComponent},
    {path: '/logout', component: LogoutComponent}
])
export class AuthenticationComponent {
    constructor (private _authService: AuthService) {}

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }

}