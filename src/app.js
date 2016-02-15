//Vendor
import angular from 'angular';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import uiRouterExtras from 'ui-router-extras/release/ct-ui-router-extras.js';

//Global Modules
import NavigationModule from './components/navigation/navigation';
import LegalModule from './components/legal/legal';
import PageTitleModule from './components/page-title/page-title';
import TimerModule from './components/timer/timer';
import PaginationModule from './components/pagination/pagination';
import Platform from './components/platform/platform';

import UserLotsModule from './components/user-lots/user-lots';
import StaticContentModule from './components/static/static';
import LotPageModule from './components/lot/lot';
import SearchBarModule from './components/search-bar/search-bar';
import SearchModule from './components/search/search';

//Global templates & css
import footerTemplate from "./components/footer/footer.html";
import './app.css';
import 'flexboxgrid/css/flexboxgrid.css';
import 'angular-loading-bar/build/loading-bar.css';

angular.module('mbva.app', [
    uiRouter,
    'ct.ui.router.extras',
    ngAnimate,
    ngMessages,
    oclazyload,
    require('angular-loading-bar'),
    Platform.name,
    require('./components/home/home-route').default.name,
    require('./components/login/login-route').default.name,
    require('./components/auction-overview/auction-overview-route').default.name,
    UserLotsModule.name,
    NavigationModule.name,
    SearchBarModule.name,
    SearchModule.name,
    LegalModule.name,
    PageTitleModule.name,
    TimerModule.name,
    PaginationModule.name,
    StaticContentModule.name,
    LotPageModule.name
])
.config(routeConfig)
.controller('AppController',() => new AppController)
.run(run)

function run(){
    //Use fastclick since ngTouch is deprecated from angular 1.5.x
    require('fastclick').attach(document.body)
}

routeConfig.$inject = ['$stateProvider','$urlRouterProvider','$compileProvider','cfpLoadingBarProvider'];
function routeConfig($stateProvider,$urlRouterProvider,$compileProvider,cfpLoadingBarProvider) {
    $compileProvider.debugInfoEnabled(false);
    cfpLoadingBarProvider.latencyThreshold = 300;
    //URL rewritings
    $urlRouterProvider.otherwise('/'); //Fallback
    $urlRouterProvider.when('/login/*path', 'login');
    /*$urlRouterProvider.when('/auction/lot/:id?*path', '/auction/lot/:id?page');*/
    //$urlRouterProvider.when('/auction/index/:id?*path', "/auction/lot/:id");
    $urlRouterProvider.when('/content/terms', '/terms');
    
    $stateProvider
        .state('root', {
            abstract: true,
            views: {
                '@': {
                    controller: "AppController",
                },
                'footer@': {
                    template:footerTemplate
                }
            }
        })
        .state('404', {
            parent: 'root',
            url: "/404",
            pageTitle: 'Error 404',
            views: {
                "@": {
                    template: 'error-404.html',
                }
            }
        })
}

class AppController {
    constructor(){
      this.scroll = {
          staticscroll:false
      }
    }
}

/*.config([
        '$httpProvider',
        '$urlRouterProvider',
        '$stateProvider',
        function ($httpProvider, $urlRouterProvider, $stateProvider) {
            //URL REWRITINGS
      
            //$locationProvider.html5Mode({ enabled: true, requireBase: false });
      
            //Interceptor
            $httpProvider.interceptors.push([
                '$injector',
                function ($injector) {
                    return $injector.get('sessionRecovery');
                }
            ]);
            $httpProvider.defaults.withCredentials = true; //needed for api-test

       
        }])*/