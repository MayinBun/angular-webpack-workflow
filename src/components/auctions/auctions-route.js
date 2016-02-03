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

getAuctions.$inject = ['$q', 'AuctionsService'];
function getAuctions($q, AuctionsService) {
    return AuctionsService.getAuctionsPaged(1).then(response => response.data);
}

/*function lazyLoad($q,$ocLazyLoad){
    return $q((resolve) => {
        require.ensure([],()=>{
            let module = require('./auctions');
            $ocLazyLoad.load({name:'mbva.auctions'});
            console.log(module);
            resolve(module);
        })
    })
}*/


class AuctionsController {
    constructor(AuctionsCurrent) {
        this.auctions = AuctionsCurrent;
    }
}