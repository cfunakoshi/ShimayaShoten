import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'my-logout',
    template: `
    		<div class="text-center" *ngIf="isLoggedIn()">
                <div class="jumbotron">
                    <h2>Are you sure you want to log out?</h2>
                    <br>
            	   <button class="btn btn-danger" (click)="onLogout()">Logout</button>
                </div>
            </div>
    `,
    styles: [`
    	
    `]
})
export class LogoutComponent {
    constructor(private _authService: AuthService, private _router: Router) {}

    onLogout() {
        this._authService.logout();
        this._router.navigate(['/auth']);
    }

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}