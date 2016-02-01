import angular from "angular";
import ngResource from "angular-resource";

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
        
export default angular.module('mbva.platform',[ngResource])
        .service('resolve',()=> new ResolveService);
        
        const ApiEndpoint = 'https://origin-api.bva-auctions.com/api/rest';
        class ResolveService {
            constructor($resource){
                this.$resource = $resource;
               
            }
            resolve (serviceEndpoint, paramDefaults, actions, options){
                this.URL = [ApiEndpoint, serviceEndpoint].join('/');
                return this.$resource(this.URL,paramDefaults,actions,options);
            }
        }
        ResolveService.$inject = ['$resource'];