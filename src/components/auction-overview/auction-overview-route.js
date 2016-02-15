import angular from 'angular';
import AuctionOverviewController from './auction-overview-controller';

export default angular.module('mbva.auction-overview.route', [
    require('../lots/lots-route').default.name,
    require('../auction-categories/auction-categories-route').default.name
]).config(routeConfig)

function routeConfig($stateProvider) {
    $stateProvider.state('auction-overview', {
        parent: 'root',
        abstract: true,
        sticky: true,
        url: ':auctionId',
        resolve: {
            loadModule: ($q, $ocLazyLoad) => {
                return $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('./auction-overview');
                        $ocLazyLoad.load({ name: module.default.name });
                        resolve(module);
                    })
                })
            }
        },
        views: {
            "@": {
                controller: AuctionOverviewController,
                controllerAs: 'vm',
                template: require('./auction-overview.html')
            }
        }
    })
}
routeConfig.$inject = ['$stateProvider'];