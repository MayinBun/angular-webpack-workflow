'use strict';
import angular from 'angular';
export default angular.module('mbva.platform', [])
    .service('platform',() => new PlatformService);

const API_ENDPOINT = 'https://api-test.bva-auctions.com/api/rest';  

class PlatformService {
    constructor(BASE) {
        this.API_ENDPOINT = API_ENDPOINT;
    }
}