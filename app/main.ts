import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import {enableProdMode} from '@angular/core';

enableProdMode();
bootstrap(AppComponent, [appRouterProviders])
    .catch(err => console.error(err));