'use strict';
import angular from 'angular';
export default angular.module('mbva.platform', [])
    .service('platform',() => new PlatformService);

const API_ENDPOINT = 'https://api.bva-auctions.com/api/rest';  

class PlatformService {
    constructor() {
        this.API_ENDPOINT = API_ENDPOINT;
    }
}