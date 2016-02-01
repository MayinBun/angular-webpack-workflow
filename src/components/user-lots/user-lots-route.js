angular.module('mbva.user-lots')
    .config(['$stateProvider', function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('user-lots', {
                url: '/dashboard',
                templateUrl: 'components/user-lots/user-lots.html',
                controller: 'UserLotsController',
                resolve: {
                    userLots: ['userLotsService', '$q', '$state',
                        function (userLotsService, $q, $state) {
                            var defer = $q.defer();
                            userLotsService.query(function (response) {
                                defer.resolve(response);
                            }, function (error) {
                                $q.reject(error);
                            });
                            return defer.promise;
                        }]
                },
                deepStateRedirect: {
                    default: { state: 'user-lots.overbid' }
                }
            })
            .state('user-lots.overbid', {
                url: '/overbid',
                template: '<div user-lots=userLots.overbid.lots></div>'
            })
            .state('user-lots.closed', {
                url: '/closed',
                template: '<div user-lots=userLots.closed.lots></div>'
            })
            .state('user-lots.highestbidder', {
                url: '/highestbidder',
                template: '<div user-lots=userLots.highestbidder.lots></div>'
            })
            .state('user-lots.notbidded', {
                url: '/notbidded',
                template: '<div user-lots=userLots.notbidded.lots></div>'
            })
    }]);