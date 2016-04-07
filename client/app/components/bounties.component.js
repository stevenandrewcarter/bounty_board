System.register(['angular2/core', 'angular2/router', './bounty-detail.component', '../services/bounty.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, bounty_detail_component_1, bounty_service_1;
    var BountiesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (bounty_detail_component_1_1) {
                bounty_detail_component_1 = bounty_detail_component_1_1;
            },
            function (bounty_service_1_1) {
                bounty_service_1 = bounty_service_1_1;
            }],
        execute: function() {
            BountiesComponent = (function () {
                function BountiesComponent(_bountyService, _router, _routeParams) {
                    this._bountyService = _bountyService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.status = false;
                }
                BountiesComponent.prototype.gotoDetail = function (bounty) {
                    var link = ['BountyDetail', { id: bounty.id }];
                    this._router.navigate(link);
                };
                BountiesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var routeStatus = +this._routeParams.get('status');
                    this.status = routeStatus == 1;
                    this._bountyService.getBounties().then(function (bounties) { return _this.bounties = bounties; });
                };
                BountiesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        templateUrl: 'views/bounties.component.html',
                        directives: [bounty_detail_component_1.BountyDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [bounty_service_1.BountyService, router_1.Router, router_2.RouteParams])
                ], BountiesComponent);
                return BountiesComponent;
            }());
            exports_1("BountiesComponent", BountiesComponent);
        }
    }
});
//# sourceMappingURL=bounties.component.js.map