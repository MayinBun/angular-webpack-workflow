import homeTemplate from "./home.html";

export default function routeConfig ($stateProvider){
    $stateProvider
    .state('home',{
        parent:'root',
        url: '/',
        deepStateRedirect:{
          default:{state:'auctions-current'}  
        },
        views:{
            "@":{
                template:homeTemplate
            }
        }
    })
}
routeConfig.$inject = ['$stateProvider'];


/*    .config(["$stateProvider", function ($stateProvider) {
        "use strict";
        $stateProvider
            .state("home", {
                parent: "root",
                sticky:true,
                url: "/",
                deepStateRedirect: {
                    default: { state: "auctions-current" }
                },
                views: {
                    "@": {
                        templateUrl: "components/home/home.html",
                        resolve: {
                            carouselItems: [
                                "carouselService", "$q", "cacheService",
                                function (carouselService, $q, cacheService) {
                                    if (cacheService.get('carouselItems')) {
                                        return cacheService.get('carouselItems');
                                    }
                                    var defer = $q.defer();
                                    carouselService.getCarouselItems().then(function (response) {
                                        cacheService.put('carouselItems', response);
                                        defer.resolve(response);
                                    }, function (error) {
                                        defer.resolve(error);
                                    })
                                    return defer.promise;
                                }]
                        },
                        controller: [
                            "$scope", "carouselItems",
                            function ($scope, carouselItems) {
                                $scope.mobileBanner = {};
                                $scope.mobileBanner.data = carouselItems.data.carousel.item;
                            }
                        ]
                    }
                }
            })*/
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

            })
        //Futured auctions
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