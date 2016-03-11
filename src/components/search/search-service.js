/*
angular
  .module('mbva.search')
  .factory('searchService', [
    'resolve',
    function (resolve) {
      function search(input, page) {
        var resource;
        resource = resolve("ext123/search/" + input + "/" + page);
        return resource;
      }
      return search;
    }
  ]);*/
  import {Platform} from '../platform/platform';
  export default class SearchService extends Platform {
      constructor($http){
          super($http);
      }
      searchQuery(searchQuery,page){
          return this.$http.get(this.platform + '/ext123/search/' + searchQuery + '/' + page || 1);
      }
  }
  SearchService.$inject = ['$http'];