export default class AuctionsFuturedService {
    constructor($http,platform){
        this.$http = $http;
        this.platform = platform;
    }
    getFutureAuctions(page){
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/auctions/byfuture/paged',{
            params:{
                page:page
            }
        });
    }
}