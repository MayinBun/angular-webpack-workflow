import angular from 'angular';

export default angular.module('mbva.lot-targeting.route',[])
.config(routeConfig)

function routeConfig($stateProvider) {
    'use strict';
    $stateProvider
        .state('lot-targeting', {
            parent: 'home',
            url: 'selected',
            sticky: true,
            pageTitle: 'BVA Auctions - Speciaal voor u',
            resolve: {
                loadModule: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./lot-targeting');
                            $ocLazyLoad.load({ name: module.default.name });
                            resolve(module);
                        })
                    })
                }
            },
            views: {
                "home": {
                    template: require('./lot-targeting.html'),
                    controller: LotTargetingController,
                    controllerAs: 'vm',
                    resolve: {
                        SelectedLots: SelectedLots
                    }
                }
            },
        })
}
routeConfig.$inject = ['$stateProvider'];

function SelectedLots($q, LotTargetingService) {
    let defer = $q.defer();
    LotTargetingService.getSelectedLots().then(response => {
        defer.resolve(response.data);
    }, (error) => {
        defer.resolve(error);
    });
    return defer.promise;
}
SelectedLots.$inject = ['$q', 'LotTargetingService'];


class LotTargetingController {
    constructor(SelectedLots) {
        this.selectedLots = SelectedLots;
    }
}
LotTargetingController.$inject = ['SelectedLots']