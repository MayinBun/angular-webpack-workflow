angular.module('mbva.lot')
	.factory('lotBidOverview', [
		'$http',
		'ENV',
		function ($http,ENV) {
			'use strict';
			function putBidOverview(lotId,bidobj){
				var bidoverview;
				console.log(bidobj);
				bidoverview = $http.post(ENV.apiEndpoint + '/ext123/lot/' + lotId + '/bidoverview',bidobj)
				return bidoverview;
			}
			return putBidOverview;
		}])	