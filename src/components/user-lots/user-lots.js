import angular from 'angular';
import UserLotsService from './user-lots-service';
import routeConfig from './user-lots-route';
import './user-lots.css';
export default angular.module('mbva.user-lots',[
])
.service('UserLotsService',UserLotsService)
.config(routeConfig);
