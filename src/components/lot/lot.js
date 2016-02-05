import angular from 'angular';
import './lot.css';
import routeConfig from './lot-route';
import LotService from './lot-service';
export default angular.module('mbva.lot', [])
.config(routeConfig)
.service('LotService',LotService)