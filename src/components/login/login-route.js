angular.module('mbva.login')
    .config(['$stateProvider',
        function ($stateProvider) {
            'use strict';
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'components/login/login.html',
                    controller: 'LoginController',
                    pageTitle:'BVA Auctions - Inloggen'
                })
        }]);