import angular from 'angular';
import AuctionsService from './auctions-service';
import auctionsDirective from './auctions-directive';

export default angular.module('mbva.auctions', [])
    .service('AuctionsService', AuctionsService)
    .directive('auctions', auctionsDirective)
