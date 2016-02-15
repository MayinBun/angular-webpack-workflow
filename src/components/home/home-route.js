import angular from 'angular';
import AuctionsRoute from '../auctions/auctions-route';

export default angular.module('mbva.home.route', [
    require('../auctions/auctions-route').default.name,
    require('../auctions-future/auctions-future-route').default.name,
    require('../lot-targeting/lot-targeting-route').default.name
]).config(routeConfig)


function routeConfig($stateProvider) {
    $stateProvider
        .state('home', {
            parent: 'root',
            url: '/',
            deepStateRedirect: {
                default: { state: 'auctions-current' }
            },
            resolve: {
                loadModule: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./home');
                            $ocLazyLoad.load({ name: module.default.name });
                            resolve(module);
                        })
                    })
                }
            },
            views: {
                "@": {
                    template: require('./home.html')
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