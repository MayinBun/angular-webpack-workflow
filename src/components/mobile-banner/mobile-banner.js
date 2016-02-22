angular.module('mbva.mobile-banner', [])
    .directive('mBanner', ['$interval', function ($interval) {
        return {
            scope: {
                slides: '=mBanner'
            },
            templateUrl: 'components/mobile-banner/mobile-banner.html',
            link: function (scope, elem, attr) {
                var maxImages = scope.slides.length - 1;
                var AUTOPLAY_INTERVAL = 4000;
                var autoplay;

                scope.currentSlide = 0;

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
            }
        }
    }])