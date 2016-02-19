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
      searchQuery(searchQuery,page){
          return this.$http.get(this.platform.API_ENDPOINT + '/ext123/search/' + searchQuery + '/' + page || 1);
      }
  }
  SearchService.$inject = ['$http','platform'];