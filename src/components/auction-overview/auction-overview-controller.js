/*angular.module("mbva.auction-overview")
	.controller("AuctionOverviewController", [
		'$scope',
		'$stateParams',
		'auctionSummaryService',
		function ($scope, $stateParams, auctionSummaryService) {
			//for tab url states
            $scope.auctionsummary.data = {};
			$scope.tab = { page: 1, photosPage: 1, data:[] };
			$scope.lots = {};
			auctionSummaryService($stateParams.auctionId).get(function (response) {
				$scope.auctionsummary.data = response;
				//console.log($scope.auctionsummary.data);
				$scope.auctionsummary.showInfoButton = true;
			},function(error){
				$scope.auctionsummary.showInfoButton = false;
			})
			//hide infobutton
			$scope.$on('$destroy',function(){
				$scope.auctionsummary.showInfoButton = false;
			})
		}]);*/
        
        
        export default class AuctionOverviewController {
            constructor($scope,$stateParams){
                this.$scope = $scope;
                this.$scope.lots = {};
                this.$stateParams = $stateParams;
                this.$scope.tab = {page:1};
                this.tab = this.$scope.tab;
                //this.AuctionSummaryService = AuctionSummaryService;
                
                this.$scope.$on('$destroy',()=>{
                    //this.$scope.auctionsummary.showInfoButton = false;
                })
                
            }
            INIT(auctionId){
                //todo
            }
        }
        AuctionOverviewController.$inject = ['$scope','$stateParams'];