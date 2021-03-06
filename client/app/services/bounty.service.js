System.register(['../models/mock-bounties', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_bounties_1, core_1;
    var BountyService;
    return {
        setters:[
            function (mock_bounties_1_1) {
                mock_bounties_1 = mock_bounties_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BountyService = (function () {
                function BountyService() {
                }
                BountyService.prototype.getBounties = function () {
                    return Promise.resolve(mock_bounties_1.BOUNTIES);
                };
                BountyService.prototype.getOpenBounties = function () {
                    return Promise.resolve(mock_bounties_1.BOUNTIES).then(function (bounties) { return bounties.filter(function (bounty) { return bounty.status == true; }); });
                };
                BountyService.prototype.getBounty = function (id) {
                    return Promise.resolve(mock_bounties_1.BOUNTIES).then(function (bounties) { return bounties.filter(function (bounty) { return bounty.id === id; })[0]; });
                };
                BountyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BountyService);
                return BountyService;
            }());
            exports_1("BountyService", BountyService);
        }
    }
});
//# sourceMappingURL=bounty.service.js.map