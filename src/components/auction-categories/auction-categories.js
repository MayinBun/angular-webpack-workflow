import angular from 'angular';
import AuctionCategoriesService from './auction-categories-service';
import routeConfig from './auction-categories-route';
import './auction-categories.css';
export default angular.module("mbva.auction-categories", [])
.service('AuctionCategoriesService',AuctionCategoriesService)
.config(routeConfig);