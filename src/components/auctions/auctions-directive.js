  import auctionsTemplate from './auctions.html';
    export default function auctionsDirective (AuctionsService) {
      return {
        restrict: 'EA',
        scope: {
          auctions: '=auctions',
        },   
        template:auctionsTemplate,
       link: function (scope, element, attr) {
          if (scope.auctions.list) {
            var currentPage = Math.ceil(scope.auctions.list.length / 25) || 1;
            var pages = Math.ceil(scope.auctions.totalSize / 25);
            scope.isLastPage = pages > currentPage;
            scope.loadMore = function () {
              if (pages > currentPage) {
                currentPage++;
                AuctionsService.getAuctionsPaged(currentPage).then(function(response){
                  for (var i = 0; i < response.data.list.length; i++) {
                    var auction = response.data.list[i];
                    scope.auctions.list.push(auction);
                  }
                })
                scope.isLastPage = pages > currentPage;
              }
            }
          }
        }
      }
    }
    auctionsDirective.$inject = ['AuctionsService'];
   
    
   
    
/*    import template from "./auctions-tpl.html";
    class AuctionsDirective {
        constructor(AuctionsService){
            this.restrict = 'EA';
            this.scope = {
                auctions:'=auctions'
            }
            template:template;
        }
    }*/