export default class NewsService {
      constructor($http,platform){
          this.$http = $http;
          this.platform = platform;
      }
      getNews(){
          return this.$http.get(this.platform.API_ENDPOINT + '/ext123/content-items/news')
      }
  }
  NewsService.$inject = ['$http','platform'];