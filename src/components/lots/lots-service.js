import {Platform} from '../platform/platform';
export default class LotsService extends Platform {
      constructor($http){
          super($http);
      }
      getLots(auctionId,page){
          return this.$http.get(this.platform + '/ext123/lots/byauction/' + auctionId + '/25/' + page)
      }
     getCategorieLots(subcatId){
        return this.$http.get(this.platform + '/ext123/lots/bysubcategory/' + subcatId);
    }
  }
  LotsService.$inject = ['$http'];