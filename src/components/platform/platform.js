'use strict';
import angular from 'angular';
export default angular.module('mbva.platform', [])
    .service('platform',() => new PlatformService);

const API_ENDPOINT = 'https://origin-api.bva-auctions.com/api/rest';  

class PlatformService {
    constructor() {
        this.API_ENDPOINT = API_ENDPOINT;
    }
}


class Platform {
    constructor($http){
        this._platform = API_ENDPOINT;
        this._$http = $http;
    }
    get platform (){
        return this._platform;
    }
    set platform(platform){
        this._platform = platform;
    }
    get $http (){
        return this._$http;
    }
    set $http($http){
        this._$http = $http;
    }
}
Platform.$inject = ['$http'];
export {Platform}