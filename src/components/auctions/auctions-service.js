angular
  .module('mbva.auctions')
  .factory('auctionsService', [
    'resolve',
    function (resolve) {
      'use strict';
      function getAuctions(page) {
        var resource;
        resource = resolve('ext123/auctions/bycurrent/paged', {
          page: page,
        });
        return resource;
      }
      return getAuctions;
    }
  ])