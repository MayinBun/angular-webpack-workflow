angular.module("mbva.lot")
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state("lot", {
      parent:"root",
      url: "^/auction/lot/:auctionId/:lotId",
      views: {
        "staticView@": {
          templateUrl: "components/lot/lot.html",
          controller: "LotController",
          resolve: {
            lot: lot,
            lotMedia: lotMedia,
            auction:auction
          }
        }
      }
    });

    function lot(lotService, $stateParams, $q) {
      var defer = $q.defer();
      lotService($stateParams.lotId).get(function (response) {
        defer.resolve(response);
      }, function (error) {
        defer.resolve(error);
      })
      return defer.promise;
    }

    function lotMedia(lotMediaService, $stateParams, $q) {
      var defer = $q.defer();
      lotMediaService($stateParams.lotId).query(function (response) {
        defer.resolve(response);
      }, function (error) {
        defer.resolve(error);
      })
      return defer.promise;
    }
    
    function auction(auctionService,$stateParams,$q){
        var defer = $q.defer();
      auctionService($stateParams.auctionId).get(function (response) {
        defer.resolve(response);
      }, function (error) {
        defer.resolve(error);
      })
      return defer.promise;
    }
  }]);