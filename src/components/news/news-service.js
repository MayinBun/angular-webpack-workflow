import {Platform} from '../platform/platform';
export default class NewsService extends Platform {
      constructor($http){
          super($http);
      }
      getNews(){
          return this.$http.get(this.platform + '/ext123/content-items/news')
      }
  }
  NewsService.$inject = ['$http'];