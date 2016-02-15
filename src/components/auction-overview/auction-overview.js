/*angular.module("mbva.auction-overview", [
  "mbva.auction-categories",
  "mbva.auction-summary",
  "mbva.lots",
  "mbva.lots-photos",
])*/
import angular from 'angular';
import AuctionCategoriesModule from '../auction-categories/auction-categories';
import AuctionSummaryModule from '../auction-summary/auction-summary';
import ModalModule from '../modal/modal';
export default angular.module('mbva.auction-overview',[
    AuctionSummaryModule.name,
    ModalModule.name
])