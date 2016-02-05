import loginTemplate from './login.html';
import LoginController from './login-controller';
export default function routeConfig($stateProvider) {
    'use strict';
    $stateProvider
        .state('login', {
            url: '/login',
            template: loginTemplate,
            controller: LoginController,
            controllerAs:'vm',
            pageTitle: 'BVA Auctions - Inloggen'
        })
}
routeConfig.$inject = ['$stateProvider'];