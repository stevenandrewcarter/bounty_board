import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { BountyService }     from '../services/bounty.service';
import { BountiesComponent } from './bounties.component';
import { BountyDetailComponent } from './bounty-detail.component';
import { DashboardComponent } from './dashboard.component';
@RouteConfig([
    {
        path: '/detail/:id',
        name: 'BountyDetail',
        component: BountyDetailComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/bounties',
        name: 'Bounties',
        component: BountiesComponent
    }
])
@Component({
    selector: 'my-app',
    templateUrl: 'views/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        BountyService
    ]
})
export class AppComponent {
    title = 'Bounty Board';
}
