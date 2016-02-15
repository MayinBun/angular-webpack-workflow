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
            constructor($scope,$stateParams,AuctionSummaryService){
                this.$scope = $scope;
                this.$stateParams = $stateParams;
                this.AuctionSummaryService = AuctionSummaryService;
                
                /*@ this.$scope.tab 
                This is a shared scope object between the child states of auction-overview.
                1.auction-categories
                2.lots
                3.lots-photos
                */
                this.$scope.tab = {page:1};
           
                this.summary = {};          
                this.$scope.$on('$destroy',()=>{
                    this.$scope.auctionsummary.showInfoButton = false;
                })
                
                this.INIT(this.$stateParams.auctionId);
                
            }
            INIT(auctionId){
                this.AuctionSummaryService.getAuctionSummary(auctionId).then(response =>{
                    this.summary = response.data;
                    this.$scope.auctionsummary.showInfoButton = true;
                },(reject)=>{
                    this.$scope.auctionsummary.showInfoButton = false;
                })
            }
        }
        AuctionOverviewController.$inject = ['$scope','$stateParams','AuctionSummaryService'];