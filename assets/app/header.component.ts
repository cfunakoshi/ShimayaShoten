import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import {AuthService} from "./auth/auth.service";
@Component({
    selector: 'my-header',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" [routerLink]="['./']"><img src="/favicon.ico" alt="Shimaya Shoten Ltd."></a>
                    </div>
                     <ul class="nav navbar-nav">
                        <li><a [routerLink]="['./']">Home</a></li>
                        <li><a [routerLink]="['./product']">Products</a></li>
                        <li><a [routerLink]="['./about/mission']">About Us</a></li>
                        <li><a [routerLink]="['./location']">Contact Us</a></li>
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

        .nav >li >a {
            padding-top: 23px;
            padding-bottom: 23px;
        }

        ul {
            text-align: center;
        }

        li {
            float: none;
            display: inline-block;
        }

        li a {
            color: #000084;
        }

        li a:hover {
            color: #FF2400;
        }

        .router-link-active {
            color: #FF2400;
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