import angular from "angular";
import CarouselService from "./carousel-service";
import template from "./carousel.html";
import './carousel.css';

export default angular.module('mbva.carousel',[])
.directive('mobileBanner',directive)
.factory('carouselService',CarouselService.Factory);


directive.$inject = ['carouselService','$timeout'];
  function directive (carouselService,$timeout) {
    return {
      restrict: 'AE',
      template:template,
      link:function(scope,element,attrs){        
        //console.log($scope.mobileBanner.data);
        scope.loaded = false;
        
        scope.breakpoints = [
          {
            breakpoint:99999,
            settings:{
              slidesToShow:4,
              slidesToScroll:1
            }
          },
          {
            breakpoint:1280,
            settings:{
              slidesToShow:3,
              slidesToScroll:1
            }
          },
          {
            breakpoint:768,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint:580,
            settings:{
              slidesToShow:2,
              slidesToScroll:1
            }
          }
        ]
        //render hack
        $timeout(function(){
          scope.loaded = true;
        })
      }
    }
  }
