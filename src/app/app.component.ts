import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterModule,
        RouterOutlet,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatNativeDateModule,
        // BrowserModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'simple_crm';
}
