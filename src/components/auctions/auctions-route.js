'use strict';
import template from './auctions.html';
routeConfig.$inject = ['$stateProvider'];
export default function routeConfig($stateProvider) {
    $stateProvider
        .state('auctions-current', {
            parent: 'home',
            sticky: true,
            url: 'auctions/current',
            views: {
                "auctions": {
                    template:template,
                    controller: AuctionsController,
                    controllerAs: 'vm',
                    resolve: {
                        AuctionsCurrent: getAuctions,
                    }
                }
            }
        })
}
                                  
function getAuctions($q, AuctionsService) {
    let defer = $q.defer(); 
    AuctionsService.getAuctionsPaged(1).then(response => {
        defer.resolve(response.data);
    },(error) => {
        defer.resolve(error);
    });
    return defer.promise;
}
getAuctions.$inject = ['$q', 'AuctionsService']; 

class AuctionsController {
    constructor(AuctionsCurrent) {
        this.auctions = AuctionsCurrent;
    }
}