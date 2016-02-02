/*angular.module('mbva.carousel')
  .factory('carouselService', ['$http', 'ENV',
    function ($http, ENV) {
      function getCarouselItems() {
        var promise = $http({
          method: 'GET',
          withCredentials:false,
          cache: true,
          url: ENV.carouselEndpoint,
          transformResponse: function (data) {
            var x2js = new X2JS();
            var json = x2js.xml_str2json(data);
            return json;
          }
        }).then(function (res) {
          return res;
        });
        return promise;
      }
      return { getCarouselItems: getCarouselItems };
    }])*/
    
    import x2js from '../../vendor/xml2json.min.js';
    const carouselEndpoint = 'https://api.bva-auctions.com/static/feeds/carousel_mobile.xml'; 
    export default class CarouselService {
        constructor(platform){
            this.platform = platform;
        }
        getItems(){
            return this.$http ({
                method:'GET',
                cache:true,
                url:carouselEndpoint       
            })
        }      
    }
    CarouselService.$inject = ['platform'];