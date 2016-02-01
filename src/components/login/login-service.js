angular
	.module('mbva.login')
	.factory('login', [
		'$http',
		'ENV',
		function ($http, ENV) {
			'use strict';
			function login(parameters) {
				var loginPromise;		
				loginPromise = $http.post(ENV.apiEndpoint + '/ext123/login',parameters,{
					headers:{
						"content-type":"application/json"
					}
				});	
				return loginPromise;
			}
			return login;
		}]);