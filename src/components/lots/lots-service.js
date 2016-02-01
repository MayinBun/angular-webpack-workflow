angular
  .module('mbva.lots')
  .factory('lotsService', [
    'resolve',
    function (resolve) {
      function getlots(auctionid, page) {
        var resource;
        resource = resolve("ext123/lots/byauction/" + auctionid + "/25/" + page,null,{cache:false});
        return resource;
      }
      return getlots;
    }
  ]);