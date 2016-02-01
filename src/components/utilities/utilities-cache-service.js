angular.module('mbva.utilities')
.factory('cacheService',['$cacheFactory',
function($cacheFactory){
	return $cacheFactory('appData');
}])

class CacheService {
    constructor($cacheFactory){
        this.$cacheFactory = $cacheFactory;
        return this.$cacheFactory('appData');
    }
}