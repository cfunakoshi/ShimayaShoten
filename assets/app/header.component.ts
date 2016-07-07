import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import {AuthService} from "./auth/auth.service";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="navbar navbar-inverse">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" [routerLink]="['./home']">Logo</a>
                    </div>
                     <ul class="nav navbar-nav">
                        <li><a [routerLink]="['./home']">Home</a></li>
                        <li><a [routerLink]="['./about/mission']">About Us</a></li>
                        <li><a [routerLink]="['./content']">Products</a></li>
                        <li><a [routerLink]="['./location']">Location</a></li>
                     </ul>
                     <ul class="nav navbar-nav navbar-right">
                        <li><a [routerLink]="['./auth']" *ngIf="!isLoggedIn()"><span class="glyphicon glyphicon-log-in"></span> Admin Login</a></li>
                        <li><a [routerLink]="['./auth/profile']" *ngIf="isLoggedIn()"><span class="glyphicon glyphicon-user"></span> Settings</a></li>
                     </ul>
                </div>
            </nav>
        </header>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        * {
            -webkit-border-radius: 0 !important;
            -moz-border-radius: 0 !important;
            border-radius: 0 !important;
        }

        .navbar-brand {
           color: white;          
        }

        ul {
            text-align: center;
        }

        li {
            float: none;
            display: inline-block;
        }

        .router-link-active {
            color: white;
        }
    `]
})
export class HeaderComponent {

constructor(private _authService: AuthService) {
        this._authService = _authService;
    }

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
    
}