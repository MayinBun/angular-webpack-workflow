angular
	.module('mbva.utilities')
	.service('storage', [
		'$window',
		function ($window) {
			'use strict';
			function get(key) {
				return $window.localStorage.getItem(key);
			}

			function set(key, value) {
				return $window.localStorage.setItem(key, value);
			}

			function unset(key) {
				return $window.localStorage.removeItem(key);
			}

			this.get = get;
			this.set = set;
			this.unset = unset;
		}]);

export default class StorageService {
    constructor($window){
        this.$window = $window;
    }
    get(key){
        return this.$window.localStorage.getItem(key);
    }
    set(key,value){
        return this.$window.localStorage.setItem(key, value);
    }
    unset(key){
        return this.$window.localStorage.removeItem(key);
    }
}