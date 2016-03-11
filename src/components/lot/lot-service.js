import {Platform} from '../platform/platform';
export default class LotService extends Platform {
    constructor($http, platform) {
        super($http);
    }
    getLot(lotId) {
        return this.$http.get(this.platform + '/ext123/lot/' + lotId + '/biddata');
    }
    getLotMedia(lotId) {
        return this.$http.get(this.platform + "/ext123/lot/" + lotId + "/media");
    }
    /**
     * Currently needed for 'gunning' text based on some parameters
     * getLot API call should be provided with the needed parameters, to reduce amount of requests
     */
    getAuction(auctionId) { 
        //currently needed for 'gunning' text based on some parameters
        //@TODO getLot API call should be provided with the needed parameters
        return this.$http.get(this.platform + '/ext123/auction/' + auctionId);
    }
    getBuyNowOverview(lotId) {
        this.$http.get(this.platform + '/ext123/lot/' + lotId + '/buynowoverview');
    }
    postBidOverview(lotId, bid_object) {
        return this.$http.post(this.platform + '/ext123/lot/' + lotId + '/bidoverview',bid_object)
    }
    /**
     * @param {Object} bid_object - {amount,type}
     */
    putBid(lotId, bid_object) {
        return this.$http.put(this.platform + '/ext123/lot/' + lotId + '/bid', bid_object);
    }
    /**
     * @param {string} method - POST = follow / DELETE = unfollow
     * 
     */
    followLot(lotId, method) { //passed method can be POST or DELETE
        return this.$http({
            url:this.platform + '/ext123/lot/' + lotId + '/follow', 
            method: method,
            transformResponse:function(resp){
                return resp;
            }
        })
    }
}
LotService.$inject = ['$http'];