import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
@Component({
    selector: 'my-footer',
    template: `
        <footer>   
            <div class="left-footer">
                <small>Test </small>
                <p style="text-align:right;">I would do anything for you!</p>
            </div>
        </footer>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        * {
            -webkit-border-radius: 0 !important;
            -moz-border-radius: 0 !important;
            border-radius: 0 !important;
        }
    `]
})
export class FooterComponent {
}