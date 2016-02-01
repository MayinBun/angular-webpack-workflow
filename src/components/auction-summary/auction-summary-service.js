angular.module('mbva.auction-summary')
  .factory('auctionSummaryService', [
    'resolve',
    function (resolve) {
      'use strict';
      function auctionSummary(auctionId) {
        var resource;
        resource = resolve('ext123/auction/' + auctionId + '/summary');
        return resource;
      }
      return auctionSummary;
    }
  ]);
