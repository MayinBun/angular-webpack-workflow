angular.module('mbva.lots')
  .config([
    '$stateProvider',
    function ($stateProvider) {
      'use strict';
      $stateProvider.state("list", {
        parent: 'auction-overview',
        url: "^/auction/lot/:auctionId?page&category",
        sticky: true,
        resolve: {
          auctionLots: auctionLots
        },
        controller: ['$scope', '$stateParams', 'auctionLots',
          function ($scope, $stateParams, auctionLots) {
            $scope.list = auctionLots;
            $scope.page = $stateParams.page || 1;
            $scope.tab.page = $stateParams.page;
            $scope.tab.category = $stateParams.category;
          }],
        template: function ($stateParams, auctionLots) {
          if ($stateParams.category !== undefined) {
            return "<div lots-list=list page='page' count='list.totalLotCount'></div>";
          }
          else {
            return "<div lots-list=list.lots page='page' count='list.totalLotCount'></div>";
          }
        }
      })
      function auctionLots(auctionCategoriesLots, lotsService, $stateParams) {
        if ($stateParams.category) {
          return auctionCategoriesLots($stateParams.category).query();
        } else {
          return lotsService($stateParams.auctionId, $stateParams.page || 1).get();
        }
      }
    }])