'use strict';
routeConfig.$inject = ['$stateProvider'];
export default function routeConfig ($stateProvider){
    $stateProvider
    .state('auctions-future',{
        parent:'home',
        url: 'auctions/future',
        views:{
            "auctions":{
                template:"<div auctions-future = vm.auctions_future></div>",
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
    return AuctionsFutureService.getFutureAuctions(1).then(response => response.data);
}

class AuctionsFutureController {
    constructor(AuctionsFuture){
        this.auctions_future = AuctionsFuture
    }
}


/*//Futured auctions
            .state("auctions-future", {
                url: "auctions/future",
                parent: "home",
                sticky: true,
                views: {
                    //Injects view in home.html <div data-ui-view="auctions"></div>
                    "auctions": {
                        template: "<div data-auctions-futured = auctionsFutured></div>",
                        resolve: {
                            auctionsFutured: [
                                "auctionsFuturedService", "$q",
                                function (auctionsFuturedService, $q) {
                                    var defer = $q.defer();
                                    auctionsFuturedService(1).get(function (response) {
                                        defer.resolve(response);
                                    }, function (error) {
                                        defer.resolve(error);
                                    });
                                    return defer.promise;
                                }]
                        },
                        controller: [
                            "$scope", "auctionsFutured",
                            function ($scope, auctionsFutured) {
                                $scope.auctionsFutured = auctionsFutured.list;      
                            }
                        ]
                    }
                }
            })*/
/*    }])*/