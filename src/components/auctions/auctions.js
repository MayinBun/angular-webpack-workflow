import angular from 'angular';
import Platform from '../platform/platform';
import AuctionsService from './auctions-service';
import auctionsDirective from './auctions-directive';
import routeConfig from './auctions-route';

export default angular.module('mbva.auctions', [
    Platform.name
  ])
  .service('AuctionsService',AuctionsService)
  .directive('auctions',auctionsDirective)
  .config(routeConfig);
