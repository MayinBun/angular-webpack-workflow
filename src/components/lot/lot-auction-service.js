/*Currently this service is only needed to show/hide bid input according to "disableBidding"parameter*/
angular.module("mbva.lot")
.service('auctionService',['resolve', function(resolve){
     function getAuction(auctionId){
        var res;
        res = resolve("ext123/auction/"+auctionId);
        return res;
    }
    return getAuction;
}])