angular.module('mbva.lot')
	.factory('lotFollowService', [
		'resolve',
		function (resolve) {
			var followLot;
			followLot = function (lotId) {
				var resource;
				resource = resolve("ext123/lot/" + lotId + "/follow",{},{
					//Override default transformResponse to prevent "Unexpected token o errors"
					save:{
						method:'POST',
						isArray:false,
						transformResponse:function(data){
							return data;
						}
					},
					remove:{
						method:'DELETE',
						isArray:false,
						transformResponse:function(data){
							return data;
						}
					}
				});
				return resource;
			}
			return followLot;
		}])