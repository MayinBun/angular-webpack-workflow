angular
  .module('mbva.auction-categories')
  .factory('auctionCategoriesLots', [
    'resolve',
    function(resolve) {
      function getCategorieLots(subcatId) {
        var resource;
        resource = resolve("ext123/lots/bysubcategory/" + subcatId);
        return resource;
      }
      return getCategorieLots;
    }
  ]);
