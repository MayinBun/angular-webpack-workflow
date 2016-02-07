
import template from './auction-overview.html';
import AuctionOverviewController from './auction-overview-controller';
export default function routeConfig($stateProvider) {
    $stateProvider.state('auction-overview', {
        abstract: true,
        sticky: true,
        url: ':auctionId',
        controller: AuctionOverviewController,
        controllerAs:'vm',
        template: template
    })
}
routeConfig.$inject = ['$stateProvider'];