angular.module('mbva.lots-photos')
  .config([
    '$stateProvider',
    function ($stateProvider) {
      'use strict';
      $stateProvider.state("photos", {
        parent: 'auction-overview',
        url: "^/auction/lot/photos/:auctionId?page&category",
        sticky: true,
        resolve: {
          auctionLots: auctionLots
        },
        controller: ['$scope', '$stateParams', 'auctionLots',
          function ($scope, $stateParams, auctionLots) {
            $scope.list = auctionLots;
            $scope.page = 1;
            $scope.tab.category = $stateParams.category;
          }],
        template: function ($stateParams) {
          if ($stateParams.category !== undefined) {
            return "<div lots-photos=list count='list.totalLotCount'></div>";
          }
          else {
            return "<div lots-photos=list.lots page='page' count='list.totalLotCount'></div>";
          }
        }
      })
      function auctionLots(auctionCategoriesLots, lotsService, $stateParams) {
        if ($stateParams.category) {
          return auctionCategoriesLots($stateParams.category).query();
        } else {
          return lotsService($stateParams.auctionId,1).get();
        }
      }
    }])