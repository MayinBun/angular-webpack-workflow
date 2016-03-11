import angular from 'angular';
import './image-slider.css';
export default angular.module('mbva.image-slider',[])
.directive('imageSlider',imageSliderDirective)
.directive('fsImageView', fsImageViewDirective)


function imageSliderDirective (){
    return {
        restrict:'EA',
        template:require('./image-slider.html'),
        scope:{
            images:'=?',
            enableFs:'@?',
            enableNav:'@?'
        },
        link:function(scope,element,attrs){
            scope.showFs = false;
            scope.fsEnabled = 'enableFs' in attrs;
            scope.navEnabled = 'enableNav' in attrs;
            scope.currentSlide = 0;
               
             scope.nextSlide = function() {
                scope.currentSlide = (scope.currentSlide < scope.images.length - 1) ? ++scope.currentSlide : 0;
            }

            scope.previousSlide = function() {
                scope.currentSlide = (scope.currentSlide > 0) ? --scope.currentSlide : scope.images.length - 1;
            }
            
            scope.toggleFs = function(optional){
                if(scope.fsEnabled){
                    if(!scope.showFs){
                         angular.element(document.body).addClass('hide-overflow');
                    }
                    else{
                         angular.element(document.body).removeClass('hide-overflow');
                    }
                scope.showFs = optional === undefined ? scope.showFs = true : scope.showFs = optional;
                }
            }
        }
    }
}


 function fsImageViewDirective () {
        return {
            scope:true,
            restrict:'EA',
            template:"<div class='fs-view'>" +
                "<img width='100%' data-ng-repeat='image in ::images' data-ng-src='{{::image.url}}'>" +
                "<button data-ng-click='toggleFs(false)' class='fs-view-close'>X</button>"+
            "</div>"
        }
    }