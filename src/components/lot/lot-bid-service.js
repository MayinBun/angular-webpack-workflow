angular.module('mbva.lot')
	.factory('lotBidService', [
		'$http',
		'ENV',
		function ($http, ENV) {
			var bid;
			bid = function (lotId, biddata) {
				var promise;
				promise = $http.put(ENV.apiEndpoint + "/ext123/lot/" + lotId + "/bid", biddata);
				return promise;
			}
			return bid;
		}])