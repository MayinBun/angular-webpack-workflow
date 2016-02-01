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
  ]);