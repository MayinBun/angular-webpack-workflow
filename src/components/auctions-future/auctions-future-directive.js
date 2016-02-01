angular.module('mbva.auctions-future')
  .directive('auctionsFutured',
    function () {
      'use strict';
      return {
        restrict: 'A',
        scope:{
          auctionsFutured:'=auctionsFutured'
        },
        templateUrl: 'components/auctions-future/auctions-future.html',
      };
    });