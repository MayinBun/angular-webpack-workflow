import template from './lot-targeting.html';

export default function routeConfig($stateProvider) {
    'use strict';
    $stateProvider
        .state('lot-targeting', {
            parent: 'home',
            url: 'selected',
            sticky: true,
            views: {
                "home": {
                    template: template,
                    controller: LotTargetingController,
                    controllerAs: 'vm',
                    resolve: {
                        SelectedLots: SelectedLots
                    }
                }
            },
            pageTitle: 'BVA Auctions - Speciaal voor u'
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