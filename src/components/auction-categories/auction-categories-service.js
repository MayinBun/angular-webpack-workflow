export default class AuctionCategoriesService {
    constructor($http,platform){
        this.$http = $http;
        this.platform = platform;
    }
    getAuctionCategories(auctionId){
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/auction/' + auctionId + '/nl/lotcategories');
    }
}