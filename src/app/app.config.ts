import { ApplicationConfig, Component } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';

Component({
    imports:[
        MatToolbarModule
    ]
})

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideAnimationsAsync()]
};
