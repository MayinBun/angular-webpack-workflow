angular.module('mbva.user-lots')
	.controller('UserLotsController', [
		'$scope',
		'$filter',
		'userLots',
		function ($scope, $filter, userLots) {	
			$scope.userLots = {
				overbid:{
					options:{
						open:true,
						highestBidder:false,
						bidded:true
					},
					lots:{}
				},
				highestbidder:{
					options:{
						open:true,
						highestBidder:true
					},
					lots:{}
				},
				notbidded:{
					options:{
						open:true,
						bidded:false
					},
					lots:{}
				},
				
				closed:{
					options:{
						open:false
					},
					lots:{}
				},
			}
			
			$scope.$watch('userLots', function () {
				angular.forEach($scope.userLots,function(value,key){	
					value.lots = $filter('filter')(userLots,value.options);
				})
			});
			
		}]);