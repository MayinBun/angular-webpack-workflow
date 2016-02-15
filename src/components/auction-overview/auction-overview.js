/*angular.module("mbva.auction-overview", [
  "mbva.auction-categories",
  "mbva.auction-summary",
  "mbva.lots",
  "mbva.lots-photos",
])*/
import AuctionCategoriesModule from '../auction-categories/auction-categories';
import angular from 'angular';
export default angular.module('mbva.auction-overview',[
    AuctionCategoriesModule.name,
])