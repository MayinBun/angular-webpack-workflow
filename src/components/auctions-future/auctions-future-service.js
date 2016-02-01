angular.module('mbva.auctions-future')
  .factory('auctionsFuturedService', [
    'resolve',
    function (resolve) {
      'use strict';
      function getFuturedAuctions(page) {
        var resource;
        resource = resolve('ext123/auctions/byfuture/paged', { 
          page: page
        });
        return resource;
      }
      return getFuturedAuctions;
    }
  ]);
