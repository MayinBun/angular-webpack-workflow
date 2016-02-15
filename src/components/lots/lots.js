import angular from 'angular';
import routeConfig from './lots-route';
import LotsService from './lots-service';
import lotsListDirective from './lots-list-directive';

export default angular.module('mbva.lots', [])
.config(routeConfig)
    .service('LotsService',LotsService)
    .directive('lotsList',lotsListDirective)