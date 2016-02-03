import angular from 'angular';
import Platform from '../platform/platform';
import AuctionCategoriesService from './auction-categories-service';
import './auction-categories.css';
angular.module("mbva.auction-categories", [
	Platform.name
])
.service('AuctionCategoriesService',AuctionCategoriesService);