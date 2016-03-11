import angular from 'angular';
import moment from 'moment';

const exceptions = {
    bidBelowIncrement: "Er is een hoger bod geplaatst!",
    bidClosed: "Kavel is gesloten!",
    serverError: "Oeps er ging iets mis! Probeer het later nog ééns"
}
export default class LotController {
    constructor($scope, $state, $window, $document,lot,auction,LotService,lotMedia) {
        this.$scope = $scope;
        this.$state = $state;
        this.service = LotService;
        this.lot = lot;
        this.auction = auction;
        this.body = angular.element($document[0].body); //todo adjust modal directive
        this.images = lotMedia.data;
        
        //console.log(this.auction);
        /*this.lotMedia = lotMedia;
        */
        
        //set time values
        this.now = moment();
        this.lotEnd = moment(this.lot.lot.endDate);
        this.lotStart = moment(this.lot.lot.startDate);
        
        //scroll content in view
      /*  this.main.scroll.staticscroll = true;
        this.$scope.$on('$destroy', () => {
            this.main.scroll.staticscroll = false;
        })*/
        //set default object values
        this.exception = {};
        this.bidoverview = {};
        this.bid_object = {};
        this.showModal = false;
        this.bid = {
            bidvalue: this.lot.nextBidAmount,
            autobid: false
        }
        
    }
   submitBid() {
        this.showModal = false;
        this.bid.autobid ? this.bid_object.type = 2 : this.bid_object.type = 1;
        this.bid_object.amount = this.bid.bidvalue;

        this.service.postBidOverview(this.lot.lot.id, this.bid_object).then(response => {
            this.exception.message = "";
            this.bidoverview = response.data;
            this.showModal = true;
            this.body.addClass('hide-overflow');
        }, (error) => {
            if (error.data.message == 'bid.below.increment') {
                this.exception.message = exceptions.bidBelowIncrement;
            }
            else if (error.data.message == 'bid.closed') {
                this.exception.message = exceptions.bidClosed;
            }
            else if (error.status == 500) {
                this.exception.message = exceptions.serverError;
            }
        })
    }/*
    confirmBid() {
        this.service.putBid(this.lot.lot.id, this.bid_object).then(response => {
            this.$state.reload();
        }, (error) => {

            if (error.data.message == "bid.below.increment") {
                this.showModal = false;
                this.exception.message = exceptions.bidBelowIncrement;
            }
            else if (error.data.message == "bid.closed") {
                this.showModal = false;
                this.exception.message = exceptions.bidClosed;
            }
        })
    }*/
    followLot() {
        if (this.lot.favorite) {
            this.service.followLot(this.lot.lot.id, 'DELETE').then(response => {
                this.lot.favorite = false;
            }, (error) => {
                this.exception.message = exceptions.serverError;
            })
        }
        else {
            this.service.followLot(this.lot.lot.id, 'POST').then(response => {
                this.lot.favorite = true;
            }, (error) => {
                this.exception.message = exceptions.serverError;
            })
        }
    }
    validateClosingLot() {
        if (this.lot.lot.open) {
            this.$state.reload();
        }
    }
    closeModal() {
        this.showModal = false;
        this.body.removeClass('hide-overflow');
    }


}
LotController.$inject = ['$scope', '$state', '$window', '$document','lot','auction','LotService','lotMedia']

/*
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
        function ($scope, $state, $window, $document) {
            $scope.root.staticscroll = true;
            $scope.$on('$destroy', function () {
                $scope.root.staticscroll = false;
            })
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
                    else if (error.status == 500) {
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

            $scope.reloadState = function () {
                $state.reload();
            }

            $scope.closeModal = function () {
                $scope.showModal = false;
                body.removeClass('hide-overflow');
            }
        }
    ]);*/