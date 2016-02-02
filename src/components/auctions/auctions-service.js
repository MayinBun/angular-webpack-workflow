export default class AuctionsService {
    constructor(platform, $http) {
        this.platform = platform;
        this.$http = $http;
    }
    getAuctionsPaged(page) {
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/auctions/bycurrent/paged', {
            params: {
                page: page
            }
        })
    }
}
AuctionsService.$inject = ['platform', '$http'];