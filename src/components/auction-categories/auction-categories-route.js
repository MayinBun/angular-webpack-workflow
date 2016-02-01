angular.module("mbva.auction-categories")
  .config([
    '$stateProvider',
    function ($stateProvider) {
      'use strict';
      //Main/sub categories
      $stateProvider.state("categories", {
        parent: "auction-overview",
        url: "^/auction/category/:auctionId",
        sticky: true,
        deepStateRedirect: true,
        templateUrl: "components/auction-categories/auction-categories-tpl.html",
        resolve: { auctionCategories: auctionCategories },
        controller: ['$scope', '$state', 'auctionCategories',
          function ($scope, $state, auctionCategories) {
            $scope.categories = auctionCategories;
            //console.log($scope.categories);
            $scope.redirectTo = function (categoryId) {
              $state.go('list', { category: categoryId, page: 1 });
            }
          }]
      })

      function auctionCategories(auctionCategories, $stateParams) {
        return auctionCategories($stateParams.auctionId).query();
      }
    }]);