import angular from 'angular';
export default angular.module('mbva.auctions.route',[])
.config(routeConfig);

function routeConfig($stateProvider) {
    $stateProvider
        .state('auctions-current', {
            parent: 'home',
            sticky: true,
            url: 'auctions/current',
            views: {
                "home": {
                    template: require('./auctions.html'),
                    controller: AuctionsController,
                    controllerAs: 'vm',
                    resolve: {
                        AuctionsCurrent: getAuctions
                    }
                }
            },
            resolve: {
                loadModule: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./auctions');
                            $ocLazyLoad.load({ name: module.default.name });
                            resolve(module);
                        })
                    })
                }
            }
        })
}
routeConfig.$inject = ['$stateProvider'];

function getAuctions($q, AuctionsService) {
    let defer = $q.defer();
    AuctionsService.getAuctionsPaged(1).then(response => {
        defer.resolve(response.data);
    }, (error) => {
        defer.resolve(error);
    });
    return defer.promise;
}
getAuctions.$inject = ['$q', 'AuctionsService'];


class AuctionsController {
    constructor(AuctionsCurrent) {
        this.auctions = AuctionsCurrent;
    }
}