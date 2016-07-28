import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {FrameworksGrid} from "./frameworks-grid.component";
// import {QuestionsList} from "./questions-list.component";

@Component({
    selector: 'my-app',
    template: `
        <ul class="nav nav-tabs">
            <li routerLinkActive="active"><a routerLink="/grid">Frameworks Grid</a></li>
            <li routerLinkActive="active"><a routerLink="/chart">Results Chart</a></li>
        </ul>
        <!-- Routed views go here -->
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
})

export class AppComponent {

}