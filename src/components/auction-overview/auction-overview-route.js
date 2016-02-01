angular.module("mbva.auction-overview")
  .config([
    '$stateProvider',
    function ($stateProvider) {
      'use strict';
      $stateProvider.state("auction-overview", {
        abstract: true,
        sticky: true,
        url: ":auctionId",
        controller: 'AuctionOverviewController',
        templateUrl: "components/auction-overview/auction-overview.html",
      })
    }]);