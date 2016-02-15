import angular from 'angular';
import loginTemplate from './login.html';
import LoginController from './login-controller';
function routeConfig($stateProvider) {
    'use strict';
    $stateProvider
        .state('login', {
            url: '/login',
            views:{
                "@":{
            template: loginTemplate,
            controller:'LoginController',
            controllerAs:'vm',
            resolve: {
                loadModule: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let mod = require('./login');
                            $ocLazyLoad.load({ name: mod.default.name });
                            resolve(mod);
                        })
                    })
                }
            },
           }
            },
            pageTitle: 'BVA Auctions - Inloggen'
        })
}
routeConfig.$inject = ['$stateProvider'];

export default angular.module('mbva.login.route',[])
.config(routeConfig)