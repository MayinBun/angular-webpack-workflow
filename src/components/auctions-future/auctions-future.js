import angular from 'angular';
import Platform from '../platform/platform';
import routeConfig from './auctions-future-route';
import AuctionsFutureService from './auctions-future-service';

export default angular.module('mbva.auctions-future', [
	Platform.name
])
.service('AuctionsFutureService',AuctionsFutureService)
