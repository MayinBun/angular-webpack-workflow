angular.module('mbva.lot')
  .controller('LotController', [
    '$scope',
    '$state',
    '$window',
    '$document',
    'lotFollowService',
    'lot',
    'lotMedia',
    'lotBidOverview',
    'lotBidService',
    'auction',
    'buyNowOverview',
    function ($scope, $state, $window,$document, lotFollowService, lot, lotMedia, lotBidOverview, lotBidService,auction,buyNowOverview) {  
      $scope.root.staticscroll = true;
      $scope.$on('$destroy',function(){
          $scope.root.staticscroll = false;
      })
      $scope.lotMedia = lotMedia;
      $scope.lot = lot;
      $scope.auction = auction;
      console.log(lot);
      //console.log(auction);
      $scope.bid = {};
      $scope.bid.bidvalue = lot.nextBidAmount;
      $scope.bid.autobid = false;
      $scope.bidoverview = [];
      $scope.exception = {};
      $scope.now = moment();
      $scope.lotEnd = moment($scope.lot.lot.endDate);
      $scope.lotStart = moment($scope.lot.lot.startDate);
      
      var exceptions = {
        bidBelowIncrement:"Er is een hoger bod geplaatst!",
        bidClosed:"Kavel is gesloten!",
        serverError:"Oeps er ging iets mis! Probeer het later opnieuw"
      }
      var body = angular.element($document[0].body); //todo adjust modal directive
      var bidobj = {};
      //Bidoverview modal data
      $scope.submitBid = function () {
        $scope.showModal = false;
        $scope.bid.autobid ? bidobj.type = 2 : bidobj.type = 1;
        bidobj.amount = $scope.bid.bidvalue;
        lotBidOverview(lot.lot.id, bidobj).then(function (response) {
          //console.log(response.data);
          $scope.exception.message = "";
          $scope.bidoverview = response.data;
          $scope.showModal = true;
          body.addClass('hide-overflow');
        }, function (error) {
          //console.log(error);
          if (error.data.message == "bid.below.increment") {
            $scope.exception.message = exceptions.bidBelowIncrement;
          }
          else if (error.data.message == "bid.closed") {
            $state.reload();
          }
          else if(error.status == 500){
            $scope.exception.message = exceptions.serverError;
          }
        })
      };
         
      //confirm bid
      $scope.confirmBid = function () {
        lotBidService(lot.lot.id, bidobj).then(function (response) {
          $state.reload();
        }, function (error) {
          if (error.data.message == "bid.below.increment") {
            $scope.showModal = false;
            $scope.exception.message = exceptions.bidBelowIncrement;
          }
          else if (error.data.message == "bid.closed") {
            $scope.showModal = false;
            $scope.exception.message = exceptions.bidClosed;
          }
        })
      }

      //follow - unfollow lot
      $scope.followLot = function () {
        if ($scope.lot.favorite) {
          lotFollowService(lot.lot.id).remove(function (response) {
            $scope.lot.favorite = false;
          })
        }
        else {
          lotFollowService(lot.lot.id).save(function (response) {
            $scope.lot.favorite = true;
          })
        }
      }
      
      //view functions
      $scope.checkLot = function () {
        if ($scope.lot.lot.open) {
          $state.reload();
        }
      }
      
      $scope.reloadState = function(){
        $state.reload();
      }
      
      $scope.closeModal = function(){
        $scope.showModal = false;
        body.removeClass('hide-overflow');
      }
      
      $scope.submitBuyNow = function(){
          buyNowOverview(lot.lot.id).then(function(response){
              //console.log(response);
          },function(exception){
              //console.log(exception);
          })
      }
    }
  ]);