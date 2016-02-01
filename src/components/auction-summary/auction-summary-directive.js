angular.module("mbva.auction-summary")
	.directive('auctionSummary',
		function () {
			'use strict';
			return {
				restrict: 'A',
				transclude:true,
				scope: {
					summary: '=auctionSummary'
				},
				templateUrl: 'components/auction-summary/auction-summary.html',
			}
		});