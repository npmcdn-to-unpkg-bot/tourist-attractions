﻿import { Component }       from '@angular/core';
import { AttractionService }     from './attraction.service';
import { AttractionsComponent } from './attractions.component';
import { DashboardComponent } from './dashboard.component';
import { AttractionDetailComponent } from './attraction-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Attractions']">Attractions</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['appStyles/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        AttractionService
    ]
})

@RouteConfig([
    {
        path: '/attractions',
        name: 'Attractions',
        component: AttractionsComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'AttractionDetail',
        component: AttractionDetailComponent
    },
])

export class AppComponent {
    title = 'Tour of Attractions';
}
