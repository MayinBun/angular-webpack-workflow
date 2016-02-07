import angular from 'angular';
import Platform from '../platform/platform';
import AuctionCategoriesService from './auction-categories-service';
import routeConfig from './auction-categories-route';
import './auction-categories.css';
export default angular.module("mbva.auction-categories", [
	Platform.name
])
.service('AuctionCategoriesService',AuctionCategoriesService)
.config(routeConfig);