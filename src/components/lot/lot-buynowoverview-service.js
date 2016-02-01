angular.module('mbva.lot')
	.factory('buyNowOverview', [
		'$http',
		'ENV',
		function ($http,ENV) {
			'use strict';
			function buyNowOverview(lotId){
				var buynowoverview;
				buynowoverview = $http.get(ENV.apiEndpoint + '/ext123/lot/' + lotId + '/buynowoverview',{});
				return buynowoverview;
			}
			return buyNowOverview;
		}])	