export default class LotsService {
      constructor($http,platform){
          this.$http = $http;
          this.platform = platform;
      }
      getLots(auctionId,page){
          return this.$http.get(this.platform.API_ENDPOINT + '/ext123/lots/byauction/' + auctionId + '/25/' + page,{
              cache:false
          })
      }
     getCategorieLots(subcatId){
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/lots/bysubcategory/' + subcatId);
    }
  }
  LotsService.$inject = ['$http','platform'];