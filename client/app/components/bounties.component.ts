import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Bounty} from '../models/bounty';
import {BountyDetailComponent} from './bounty-detail.component';
import {BountyService} from '../services/bounty.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'views/bounties.component.html',
    directives: [BountyDetailComponent]
})
export class BountiesComponent implements OnInit {
    constructor(private _bountyService: BountyService, private _router: Router) { }

    bounties: Bounty[];

    gotoDetail(bounty: Bounty) {
        let link = ['BountyDetail', { id: bounty.id }];
        this._router.navigate(link);
    }

    ngOnInit() {
        this._bountyService.getBounties().then(bounties => this.bounties = bounties);
    }
}
