'use strict';
routeConfig.$inject = ['$stateProvider'];
export default function routeConfig ($stateProvider){
    $stateProvider
    .state('auctions-current',{
        parent:'home',
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

/*      //Current auctions
            .state("auctions-current", {
                url: "auctions/current",
                parent: "home",
                sticky: true,
                views: {
                    //Injects view in home.html <div data-ui-view="auctions"></div>
                    "auctions": {
                        template: "<div data-auctions = auctions></div>",
                        resolve: {
                            auctionsCurrent: [
                                "auctionsService","cacheService", "$q",
                                function (auctionsService, cacheService, $q) {
                                    if (cacheService.get('auctionsCurrent')) {
                                        return cacheService.get('auctionsCurrent');
                                    }
                                    var defer = $q.defer();
                                    auctionsService(1).get(function (response) {
                                        cacheService.put('auctionsCurrent',response);
                                        defer.resolve(response);
                                    }, function (error) {
                                        defer.resolve(error);
                                    })
                                    return defer.promise;
                                }]
                        },
                        controller: [
                            "$scope", "auctionsCurrent",
                            function ($scope, auctionsCurrent) {
                                $scope.auctions = auctionsCurrent;
                            }
                        ]
                    }
                }

            })*/