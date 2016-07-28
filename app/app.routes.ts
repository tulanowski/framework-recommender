import { provideRouter, RouterConfig } from '@angular/router';
import {FrameworksGrid} from "./frameworks-grid.component";
import {FrameworksChart} from "./frameworks-chart.component";

const routes: RouterConfig = [
    { path: 'grid', component: FrameworksGrid },
    { path: 'chart', component: FrameworksChart },
    {
        path: '',
        redirectTo: '/grid',
        pathMatch: 'full'
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];