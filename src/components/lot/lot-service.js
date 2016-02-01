angular.module('mbva.lot')
	.factory('lotService', [
		'resolve',
		function (resolve) {
			var getLot;
			getLot = function (lotId) {
				var resource;
				resource = resolve("ext123/lot/" + lotId + "/biddata");
				return resource;
			}
			return getLot;
		}])