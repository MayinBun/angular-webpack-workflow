import angular from 'angular';
import Platform from '../platform/platform';
import routeConfig from './lots-route';
import LotsService from './lots-service';
import lotsListDirective from './lots-list-directive';

export default angular.module('mbva.lots', [
    Platform.name
	//'mbva.pagination'
	])
    .service('LotsService',LotsService)
    .directive('lotsList',lotsListDirective)