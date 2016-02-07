/*angular.module("mbva.auction-overview", [
  "mbva.auction-categories",
  "mbva.auction-summary",
  "mbva.lots",
  "mbva.lots-photos",
])*/
import AuctionCategoriesModule from '../auction-categories/auction-categories';
import LotsModule from '../lots/lots';
import angular from 'angular';
import routeConfig from './auction-overview-route';
export default angular.module('mbva.auction-overview',[
    AuctionCategoriesModule.name,
    LotsModule.name
])
.config(routeConfig);