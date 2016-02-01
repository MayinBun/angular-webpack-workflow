import angular from 'angular';
import Platform from '../platform/platform';
import AuctionsService from './auctions-service';

export default angular.module('mbva.auctions', [
    Platform.name
  ])
  .service('AuctionsService',AuctionsService);
