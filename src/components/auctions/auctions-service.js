import {Platform} from '../platform/platform';
export default class AuctionsService extends Platform {
    constructor($http) {
        super($http);
    }
    getAuctionsPaged(page) {
        return this.$http.get(this.platform + '/ext123/auctions/bycurrent/paged', {
            params: {
                page: page
            }
        })
    }
}
AuctionsService.$inject = ['$http'];