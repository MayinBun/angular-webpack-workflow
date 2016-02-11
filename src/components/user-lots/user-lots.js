import angular from 'angular';
import UserLotsService from './user-lots-service';
import UserLotsController from './user-lots-controller';
import routeConfig from './user-lots-route';
import UserLotsFilter from './user-lots-filter';
import './user-lots.css';
export default angular.module('mbva.user-lots',[
])
.service('UserLotsService',UserLotsService)
.controller('UserLotsController',UserLotsController)
.filter('userLotsFilter',UserLotsFilter)
.config(routeConfig);
