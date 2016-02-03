export default class AuctionsFutureService {
    constructor(platform, $http) {
        this.platform = platform;
        this.$http = $http;
    }
    getAuctionsFuture(page) {
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/auctions/byfuture/paged', {
            params: {
                page: page
            }
        })
    }
}
AuctionsFutureService.$inject = ['platform', '$http'];