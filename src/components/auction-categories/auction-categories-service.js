import {Platform} from '../platform/platform';
export default class AuctionCategoriesService extends Platform {
    constructor($http){
        super($http);
    }
    getAuctionCategories(auctionId){
        return this.$http.get(this.platform + '/ext123/auction/' + auctionId + '/nl/lotcategories');
    }
}
AuctionCategoriesService.$inject = ['$http','platform'];