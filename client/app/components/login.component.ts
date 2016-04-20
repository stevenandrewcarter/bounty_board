import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'login',
    templateUrl: 'views/login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private _routeParams: RouteParams) { }

    ngOnInit() {
    }
}
