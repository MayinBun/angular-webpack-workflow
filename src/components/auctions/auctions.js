import angular from 'angular';
import AuctionsService from './auctions-service';

export default angular.module('mbva.auctions', [])
    .service('AuctionsService', AuctionsService)
