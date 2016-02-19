import angular from 'angular';

export default angular.module('mbva.auctions-future.route', [])
    .config(routeConfig)

function routeConfig($stateProvider) {
    $stateProvider
        .state('auctions-future', {
            parent: 'home',
            sticky: true,
            url: '/auctions/future',
            views: {
                "home": {
                    template: require('./auctions-future.html'),
                    controller: AuctionsFutureController,
                    controllerAs: 'vm',
                    resolve: {
                        AuctionsFuture: getFutureAuctions,
                    }
                }
            },
            resolve: {
                loadModule: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./auctions-future');
                            $ocLazyLoad.load({ name: module.default.name });
                            resolve(module);
                        })
                    })
                }
            }
        })
}
routeConfig.$inject = ['$stateProvider'];

function getFutureAuctions(AuctionsFutureService) {
    return AuctionsFutureService.getAuctionsFuture(1).then(response => response.data);
}

class AuctionsFutureController {
    constructor(AuctionsFuture) {
        this.auctionsFuture = AuctionsFuture
    }
}
AuctionsFutureController.$inject = ['AuctionsFuture'];