import template from './auctions-future.html';
    export default function auctionsFutureDirective () {
      return {
        restrict: 'EA',
        scope:{
          auctionsFuture:'=auctionsFuture'
        },
        template:template
      };
    };