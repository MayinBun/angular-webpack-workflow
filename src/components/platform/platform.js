'use strict';
import angular from 'angular';
/*angular
	.module('mbva.platform', ['ngResource'])
	.factory('resolve',['$resource','ENV',
		function ($resource, ENV) {
			'use strict';
			function resolve(serviceEndpoint, paramDefaults, actions, options) {
				var resource;
				var url;
				url = [ENV.apiEndpoint, serviceEndpoint].join('/');
				resource = $resource(url, paramDefaults, actions, options);
				return resource;
			}
			return resolve;
		}])*/

export default angular.module('mbva.platform', [])
    .service('platform',() => new PlatformService);

const API_ENDPOINT = 'https://api.bva-auctions.com/api/rest';  

class PlatformService {
    constructor(BASE) {
        this.API_ENDPOINT = API_ENDPOINT;
    }
}