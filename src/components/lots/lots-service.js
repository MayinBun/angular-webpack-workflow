export default class LotsService {
      constructor($http,platform){
          this.$http = $http;
          this.platform = platform;
      }
      getLots(auctionId,page){
          return this.$http.get(this.platform.API_ENDPOINT + '/ext123/lots/byauction/' + auctionId + '/25/' + page || 1,{
              cache:false
          })
      }
  }