import {Component}       from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {BountyService}     from '../services/bounty.service';
import {BountiesComponent} from './bounties.component';
import {BountyDetailComponent} from './bounty-detail.component';
import {DashboardComponent} from './dashboard.component';
import {Router} from 'angular2/router';

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
        path: '/bounties/:status',
        name: 'Bounties',
        component: BountiesComponent,
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
    constructor(private _router: Router) { }

    gotoBounties(status: boolean) {
        let link = ['Bounties', { status: status }];
        this._router.navigate(link);
    }

}
