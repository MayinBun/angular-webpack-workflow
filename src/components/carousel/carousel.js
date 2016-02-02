import angular from 'angular'
import CarouselService from './carousel-service';
import carouselDirective from './carousel-directive';
import Platform from '../platform/platform';

export default angular.module('mbva.carousel',[Platform.name])
.directive('mobileBanner',carouselDirective)
.service('carouselService', CarouselService);