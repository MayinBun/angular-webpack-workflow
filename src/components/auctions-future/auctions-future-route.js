'use strict';
routeConfig.$inject = ['$stateProvider'];
export default function routeConfig ($stateProvider){
    $stateProvider
    .state('auctions-future',{
        parent:'home',
        sticky:true,
        url: 'auctions/future',
        views:{
            "home":{
                template:"<div auctions-future = vm.auctionsfuture></div>",
                controller:AuctionsFutureController,
                controllerAs:'vm',
                resolve:{
                    AuctionsFuture:getFutureAuctions
                }
            }
        }
    })
}

getFutureAuctions.$inject = ['AuctionsFutureService'];
function getFutureAuctions(AuctionsFutureService){
    return AuctionsFutureService.getAuctionsFuture(1).then(response => response.data);
}

class AuctionsFutureController {
    constructor(AuctionsFuture){
        this.auctionsfuture = AuctionsFuture
    }
}