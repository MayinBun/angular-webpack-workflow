angular.module("mbva.user-lots")
	.factory('userLotsService', [
    'resolve',
    function(resolve) {
      'use strict';
      var resource;
      resource = resolve('followedlots');
      return resource;
    }
  ])

/*angular.module('mbva.user-lots')
    .factory('userLotsService', [
        '$http',
        'ENV',
        function ($http, ENV) {
            'use strict';
            var promise;
            promise = $http.get(ENV.apiEndpoint + '/followedlots', {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return promise;
        }]);*/