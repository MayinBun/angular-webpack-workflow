/*angular
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
  ])*/
  
  export default class AuctionsService {
      constructor(resolve){
          this.resolve = resolve;
      }
      getAuctionsPaged(page){
          return this.resolve('ext123/auctions/bycurrent/paged',{
              page:page
          })
      }
  }
  AuctionsService.$inject = ['resolve'];