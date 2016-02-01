angular.module('mbva.lot')
	.factory('lotMediaService', [
		'resolve',
		function (resolve) {
		'use strict';	
		var getLotMedia;
		getLotMedia = function(lotId){
			var resource;
        	resource = resolve("ext123/lot/" + lotId + "/media", {
          	method: 'GET',
		});
		return resource;
		}
		return getLotMedia;
	}])