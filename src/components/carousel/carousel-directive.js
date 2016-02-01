import template from "./carousel.html";
import './carousel.css';
export default function directive (carouselService,$timeout) {
    return {
      restrict: 'EA',
      template:template,
      link:function(scope,element,attrs){        
        //console.log($scope.mobileBanner.data);
      /*  console.log(carouselService.getItems().then(res => console.log(res.data)));*/
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
  directive.$inject = ['carouselService','$timeout'];