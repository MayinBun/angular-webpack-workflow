/*angular.module("mbva.user-lots")
	.factory('userLotsService', [
    'resolve',
    function(resolve) {
      'use strict';
      var resource;
      resource = resolve('followedlots');
      return resource;
    }
  ])*/

        
        export default class UserLotsService {
            constructor($http,platform){
                this.$http = $http;
                this.platform = platform;
            }
            getUserLots(){
                return this.$http.get(this.platform.API_ENDPOINT + '/followedlots');
            }
        }
        