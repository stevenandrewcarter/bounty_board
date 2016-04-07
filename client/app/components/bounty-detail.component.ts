import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Bounty} from '../models/bounty';
import {BountyService} from '../services/bounty.service';

@Component({
    selector: 'my-bounty-detail',
    templateUrl: 'views/bounty-detail.component.html'
})

export class BountyDetailComponent implements OnInit {
    constructor(
        private _bountyService: BountyService,
        private _routeParams: RouteParams) {
    }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._bountyService.getBounty(id).then(bounty => this.bounty = bounty);
    }
    goBack() {
        window.history.back();
    }
    bounty: Bounty;
}
