angular.module('mbva.auction-categories')
  .factory('auctionCategories', [
    'resolve',
    function(resolve) {
      function getAuctionCategories(auctionid) {
        var resource;
        resource = resolve("ext123/auction/" + auctionid + "/nl/lotcategories", {
          method: 'GET',
        });
        return resource;
      }
      return getAuctionCategories;
    }
  ]);
