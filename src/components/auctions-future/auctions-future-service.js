import {Platform} from '../platform/platform';
export default class AuctionsFutureService extends Platform {
    constructor($http) {
        super($http);
    }
    getAuctionsFuture(page) {
        return this.$http.get(this.platform + '/ext123/auctions/byfuture/paged', {
            params: {
                page: page
            }
        })
    }
}
AuctionsFutureService.$inject = ['$http'];