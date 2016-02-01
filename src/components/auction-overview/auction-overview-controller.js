angular.module("mbva.auction-overview")
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
		}]);