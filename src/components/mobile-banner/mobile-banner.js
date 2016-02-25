import angular from 'angular';
export default angular.module('mbva.mobile-banner', [])
    .directive('mBanner', ['$interval', function ($interval) {
        return {
            scope: {
               
            },
            template:require('./mobile-banner.html'),
            link: function (scope, elem, attr) {
                var AUTOPLAY_INTERVAL = 4000;
                var autoplay;
                
                scope.slides = [
                    {
                        url:'https://images.bva-auctions.com/static/feeds/mobile/images/367.jpg',
                        name:'Life & Garden'
                    },
                    {
                        url:'https://images.bva-auctions.com/static/feeds/mobile/images/368.jpg',
                        name:'Showroomkeukens'
                    },
                    {
                        url:'https://images.bva-auctions.com/static/feeds/mobile/images/365.jpg',
                        name:'Consumentenelektronica'
                    }
                ]
                    

                scope.currentSlide = 0;
                console.log(scope.slides.length);

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

                scope.startAutoplay();
                
                scope.$on('destroy',function(){
                    $interval.cancel(autoplay);
                })
            }
        }
    }])