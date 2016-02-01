angular.module('mbva.auctions')
  .directive('auctions',['auctionsService',
    function (auctionsService) {
      'use strict';
      return {
        restrict: 'EA',
        scope: {
          auctions: '=auctions',
        },
        templateUrl: 'components/auctions/auctions-tpl.html',
        link: function (scope, element, attr) {
          if (scope.auctions.list) {
            var currentPage = Math.ceil(scope.auctions.list.length / 25) || 1;
            var pages = Math.ceil(scope.auctions.totalSize / 25);
            scope.isLastPage = pages > currentPage;
            scope.loadMore = function () {
              if (pages > currentPage) {
                currentPage++;
                auctionsService(currentPage).get(function (response) {
                  for (var i = 0; i < response.list.length; i++) {
                    var auction = response.list[i];
                    scope.auctions.list.push(auction);
                  }
                })
                scope.isLastPage = pages > currentPage;
              }
            }
          }
        }
      };
    }]);
    
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