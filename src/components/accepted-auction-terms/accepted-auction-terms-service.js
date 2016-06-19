import {Platform} from '../platform/platform';
export default class AcceptedAuctionTermsService extends Platform {
    constructor($http){
        super($http);
    }
    /**
     * @param {number} auctionId
     */
    getAcceptedAuctionTerms(auctionId){
        return this.$http.get(this.platform + '/accepted_auction_terms/' + auctionId);
    }

    /**
     * @param {Object} body - JSON object with auctionId
     * {
     *  "auctionId":0
     * }
     */
    postAcceptedAuctionTerms(body){
        return this.$http.post(this.platform + '/accepted_auction_terms',body)
    }
    
    /**
     * @param {Number} auctionId
     * response errors
     * 401:Unauthorized, authentication credentials were missing
     * 403:Cannot remove accepted extra terms if the user has already placed a bid in the specified auction
     * 404:Auction does not exist
     */
    deleteAcceptedAuctionTerms(auctionId){
        return this.$http.delete(this.platform + '/accepted_auction_terms/' + auctionId);
    }
}
AcceptedAuctionTermsService.$inject = ['$http','platform'];