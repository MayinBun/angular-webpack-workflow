import angular from 'angular';
import ngAnimate from 'angular-animate';
import './mobile-banner.css';
export default angular.module('mbva.mobile-banner', [ngAnimate])
    .directive('mBanner', ['$interval', function ($interval) {
        return {
            scope: {
               navEnabled:'@',
               autoplay:'@'
            },
            template:require('./mobile-banner.html'),
            link: function (scope, elem, attr) {
                var AUTOPLAY_INTERVAL = 4000;
                var autoplay;
                
                scope.slides = [
                    {
                        url:'https://unsplash.it/2000/1250?image=397',
                        name:'Life & Garden'
                    },
                    {
                        url:'https://unsplash.it/2000/1250?image=689',
                        name:'Showroomkeukens'
                    },
                    {
                        url:'https://unsplash.it/2000/1250?image=658',
                        name:'Consumentenelektronica'
                    }
                ]
                    

                scope.currentSlide = 0;
                //console.log(scope.slides.length);

                scope.nextSlide = function () {
                    scope.currentSlide = (scope.currentSlide < scope.slides.length - 1) ? ++scope.currentSlide : 0;
                }

                scope.prevSlide = function () {
                    scope.currentSlide = (scope.currentSlide > 0) ? --scope.currentSlide : scope.slides.length - 1;
                }

                scope.startAutoplay = function () {
                    scope.stopAutoplay();
                    autoplay = $interval(scope.nextSlide, AUTOPLAY_INTERVAL);
                };

                scope.stopAutoplay = function () {
                    $interval.cancel(autoplay);
                };
                scope.$on('destroy',function(){
                    $interval.cancel(autoplay);
                })
                
                if(scope.autoplay){
                scope.startAutoplay();
                }
            }
        }
    }])