'use strict';
routeConfig.$inject = ['$stateProvider'];
export default function routeConfig ($stateProvider){
    $stateProvider
    .state('auctions-current',{
        parent:'home',
        sticky:true,
        url: 'auctions/current',
        views:{
            "auctions":{
                template:"<div auctions = vm.auctions></div>",
                controller:AuctionsController,
                controllerAs:'vm',
                resolve:{
                    AuctionsCurrent:getAuctions
                }
            }
        }
    })
}

getAuctions.$inject = ['$q','AuctionsService'];
function getAuctions($q,AuctionsService){
    return AuctionsService.getAuctionsPaged(1).then(response => response.data);
}

class AuctionsController {
    constructor(AuctionsCurrent){
        this.auctions = AuctionsCurrent;
    }
}