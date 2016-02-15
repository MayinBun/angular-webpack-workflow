export default class AuctionSummaryService {
    constructor($http,platform){
        this.$http = $http;
        this.platform = platform;
    }
    getAuctionSummary(auctionId){
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/auction/' + auctionId + '/summary');
    }
}
AuctionSummaryService.$inject = ['$http','platform'];