export default class LotService {
    constructor($http, platform) {
        this.$http = $http;
        this.platform = platform;
    }
    getLot(lotId) {
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/lot/' + lotId + '/biddata');
    }
    getLotMedia(lotId) {
        this.$http.get(this.platform.API_ENDPOINT + "/ext123/lot/" + lotId + "/media");
    }
    getAuction(auctionId) { 
        //currently needed for 'gunning' text based on some parameters
        //@TODO getLot API call should be provided with the needed parameters
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/auction/' + auctionId);
    }
    getBuyNowOverview(lotId) {
        this.$http.get(this.platform.API_ENDPOINT + '/ext123/lot/' + lotId + '/buynowoverview');
    }
    postBidOverview(lotId, bid_object) {
        return this.$http.post(this.platform.API_ENDPOINT + '/ext123/lot/' + lotId + '/bidoverview',bid_object)
    }
    putBid(lotId, bid_object) {
        return this.$http.put(this.platform.API_ENDPOINT + '/ext123/lot/' + lotId + '/bid', bid_object);
    }
    followLot(lotId, method) { //passed method can be POST or DELETE
        return this.$http({
            url:this.platform.API_ENDPOINT + '/ext123/lot/' + lotId + '/follow', 
            method: method,
            transformResponse:function(resp){
                return resp;
            }
        })
    }
}