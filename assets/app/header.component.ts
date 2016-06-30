import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import {AuthService} from "./auth/auth.service";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" [routerLink]="['./']">Test</a>
                    </div>
                     <ul class="nav navbar-nav">
                        <li><a [routerLink]="['./']">Home</a></li>
                        <li><a [routerLink]="['./about']">About Us</a></li>
                        <li><a [routerLink]="['./content']">Products</a></li>
                        <li><a [routerLink]="['./location']">Location</a></li>
                        <li><a [routerLink]="['./message']">Message</a></li>
                     </ul>
                     <ul class="nav navbar-nav navbar-right">
                        <li><a [routerLink]="['./auth']" *ngIf="!isLoggedIn()"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        <li><a [routerLink]="['./auth']" *ngIf="isLoggedIn()"><span class="glyphicon glyphicon-user"></span> Settings</a></li>
                     </ul>
                </div>
            </nav>
        </header>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
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