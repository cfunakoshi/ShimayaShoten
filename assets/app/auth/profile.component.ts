import { Component } from "@angular/core";

import { AuthService } from "./auth.service";

@Component({
    selector: 'my-logout',
    template: `
    		<div class="text-center">
                
            </div>
    `,
    styles: [`
    	
    `]
})
export class ProfileComponent {
    constructor(private _authService: AuthService) {}
}