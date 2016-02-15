import angular from 'angular';
import AuctionSummaryService from './auction-summary-service';
import auctionSummaryDirective from './auction-summary-directive';

export default angular.module("mbva.auction-summary",[])
.service('AuctionSummaryService',AuctionSummaryService)
.directive('auctionSummary',auctionSummaryDirective)