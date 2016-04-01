import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Bounty } from '../models/bounty';
import { BountyService } from '../services/bounty.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'views/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    bounties: Bounty[] = [];    
    constructor(private _router: Router, private _bountyService: BountyService) {
    }

    ngOnInit() {
        this._bountyService.getBounties()
            .then(bounties => this.bounties = bounties.slice(1, 5));
    }

    gotoDetail(bounty: Bounty) {
        let link = ['BountyDetail', { id: bounty.id }];
        this._router.navigate(link);
    }
}

