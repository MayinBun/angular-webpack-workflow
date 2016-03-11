import {Platform} from '../platform/platform';
export default class AuctionSummaryService extends Platform {
    constructor($http){
        super($http);
    }
    getAuctionSummary(auctionId){
        return this.$http.get(this.platform + '/ext123/auction/' + auctionId + '/summary');
    }
}
AuctionSummaryService.$inject = ['$http'];