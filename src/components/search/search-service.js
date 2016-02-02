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
  
  export default class SearchService {
      constructor($http,platform){
          this.$http = $http;
          this.platform = platform;
      }
      searchQuery(query,page){
          return this.$http.get(this.platform.API_ENDPOINT + '/ext123/search/' + query + '/' + page || 1);
      }
  }