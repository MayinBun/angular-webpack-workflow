import angular from 'angular';

export default angular.module('mbva.lot.route',[])
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig($stateProvider) {
    $stateProvider.state('lot', {
        parent: 'root',
        url: '^/auction/lot/:auctionId/:lotId',
        resolve: {
            loadModule: ($q, $ocLazyLoad) => {
                return $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('./lot');
                        $ocLazyLoad.load({ name: module.default.name });
                        resolve(module);
                    })
                })
            }
        },
        views: {
            'staticView@': {
                template: require('./lot.html'),
                controller: 'LotController',
                controllerAs: 'vm',
                resolve: {
                    lot: lot,
                    auction: auction,
                    lotMedia: lotMedia
                }
            }
        }
    });

    function lot(LotService, $stateParams, $q) {
        let defer = $q.defer();
        LotService.getLot($stateParams.lotId).then(response => {
            defer.resolve(response.data);
        }, (error) => {
            defer.resolve(error);
        })
        return defer.promise;
    }

    function lotMedia(LotService, $stateParams, $q) {
        let defer = $q.defer();
        LotService.getLotMedia($stateParams.lotId).then(response => {
            defer.resolve(response);
        }, (error) => {
            defer.resolve(error);
        })
        return defer.promise;
    }

    function auction(LotService, $stateParams, $q) {
        var defer = $q.defer();
        LotService.getAuction($stateParams.auctionId).then(response => {
            defer.resolve(response.data);
        }, (error) => {
            defer.resolve(error);
        })
        return defer.promise;
    }
}