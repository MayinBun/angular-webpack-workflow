export default function SummaryDirective() {
    'use strict';
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            summary: '=auctionSummary'
        },
        template: require('./auction-summary.html')
    }
}