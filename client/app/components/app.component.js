System.register(['angular2/core', 'angular2/router', '../services/bounty.service', './bounties.component', './bounty-detail.component', './dashboard.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, bounty_service_1, bounties_component_1, bounty_detail_component_1, dashboard_component_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (bounty_service_1_1) {
                bounty_service_1 = bounty_service_1_1;
            },
            function (bounties_component_1_1) {
                bounties_component_1 = bounties_component_1_1;
            },
            function (bounty_detail_component_1_1) {
                bounty_detail_component_1 = bounty_detail_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.title = 'Bounty Board';
                }
                AppComponent.prototype.gotoBounties = function (status) {
                    var link = ['Bounties', { status: status }];
                    this._router.navigate(link);
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/detail/:id',
                            name: 'BountyDetail',
                            component: bounty_detail_component_1.BountyDetailComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/bounties/:status',
                            name: 'Bounties',
                            component: bounties_component_1.BountiesComponent,
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'views/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            bounty_service_1.BountyService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map