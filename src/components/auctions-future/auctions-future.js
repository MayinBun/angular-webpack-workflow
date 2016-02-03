import angular from 'angular';
import Platform from '../platform/platform';
import routeConfig from './auctions-future-route';
import AuctionsFutureService from './auctions-future-service';
import auctionsFutureDirective from './auctions-future-directive';

export default angular.module('mbva.auctions-future', [
	Platform.name
])
.config(routeConfig)
.service('AuctionsFutureService',AuctionsFutureService)
.directive('auctionsFuture',auctionsFutureDirective);
