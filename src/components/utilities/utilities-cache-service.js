/*angular.module('mbva.utilities')
.factory('cacheService',['$cacheFactory',
function($cacheFactory){
	return $cacheFactory('appData');
}])*/
let self;
export default class CacheService {
    constructor($cacheFactory){
        self = this;
        this.$cacheFactory = $cacheFactory('appData');
    }
    get(cacheId){
        return self.$cacheFactory.get(String(cacheId));
    }
    put(key,value){
        return self.$cacheFactory.put(String(key),value)
    }
    remove(key){
        return self.$cacheFactory.remove(String(key));
    }
    info(){
        return self.$cacheFactory.info();
    }
}
CacheService.$inject = ['$cacheFactory'];