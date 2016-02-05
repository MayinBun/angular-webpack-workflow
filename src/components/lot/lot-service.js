export default class LotService {
    constructor($http, platform) {
        this.$http = $http;
        this.platform = platform;
    }
    getLot(lotId) {
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/lot' + lotId + '/biddata');
    }
    getLotMedia(lotId) {
        this.$http.get(this.platform.API_ENDPOINT + "ext123/lot/" + lotId + "/media");
    }
    getAuction(auctionId) { 
        //currently needed for 'gunning' text based on some parameters
        //@TODO getLot service should be expanded with the needed parameters
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/auction/' + auctionId);
    }
    getBuyNowOverview(lotId) {
        this.$http.get(this.platform.API_ENDPOINT + '/ext123/lot/' + lotId + '/buynowoverview');
    }
    postBidOverview(lotId, bid_object) {
        return this.$http.post(this.platform.API_ENDPOINT + '/ext123/lot/' + lotId + '/bidoverview', {
            params: {
                bid_object: bid_object
            }
        })
    }
    putBid(lotId, bid_object) {
        return this.$http.put(this.platform.API_ENDPOINT + '/ext123/lot/' + lotId + '/bid', bid_object);
    }
    followLot(lotId, method) { //passed method can be POST or DELETE
        return this.$http(this.platform.API_ENDPOINT + '/ext123/lot/' + lotId + '/follow', {
            method: method
        });
    }
}