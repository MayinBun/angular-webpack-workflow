import angular from 'angular'
import CarouselService from './carousel-service';
import carouselDirective from './carousel-directive';

export default angular.module('mbva.carousel',[])
.directive('mobileBanner',carouselDirective)
.service('carouselService', CarouselService);