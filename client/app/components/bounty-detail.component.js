System.register(['angular2/core', 'angular2/router', '../services/bounty.service'], function(exports_1, context_1) {
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
    var core_1, router_1, bounty_service_1;
    var BountyDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bounty_service_1_1) {
                bounty_service_1 = bounty_service_1_1;
            }],
        execute: function() {
            BountyDetailComponent = (function () {
                function BountyDetailComponent(_bountyService, _routeParams) {
                    this._bountyService = _bountyService;
                    this._routeParams = _routeParams;
                }
                BountyDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._bountyService.getBounty(id).then(function (bounty) { return _this.bounty = bounty; });
                };
                BountyDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                BountyDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-bounty-detail',
                        templateUrl: 'views/bounty-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [bounty_service_1.BountyService, router_1.RouteParams])
                ], BountyDetailComponent);
                return BountyDetailComponent;
            }());
            exports_1("BountyDetailComponent", BountyDetailComponent);
        }
    }
});
//# sourceMappingURL=bounty-detail.component.js.map