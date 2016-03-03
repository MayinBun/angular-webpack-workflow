//Vendor modules
import angular from 'angular';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import angularLoadingBar from 'angular-loading-bar';
import oclazyload from 'oclazyload';
import uiRouterExtras from 'ui-router-extras/release/ct-ui-router-extras.js';

//Global App modules
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
import './app.css';
import 'flexboxgrid/css/flexboxgrid.css';
import 'angular-loading-bar/build/loading-bar.css';

//Route modules
import HomeRoute from './components/home/home-route';
import LoginRoute from './components/login/login-route';
import AuctionOverviewRoute from './components/auction-overview/auction-overview-route';

import mobileBanner from './components/mobile-banner/mobile-banner.js';

angular.module('mbva.app', [
    uiRouter,
    'ct.ui.router.extras',
    ngAnimate,
    ngMessages,
    oclazyload,
    angularLoadingBar,
    Platform.name,
    HomeRoute.name,
    AuctionOverviewRoute.name,
    LoginRoute.name,
    UserLotsModule.name,
    NavigationModule.name,
    SearchBarModule.name,
    SearchModule.name,
    LegalModule.name,
    PageTitleModule.name,
    TimerModule.name,
    PaginationModule.name,
    StaticContentModule.name,
    mobileBanner.name
   
    //LotPageModule.name
])
.run(run)
.config(routeConfig)
.controller('AppController',AppController)

function run(){
    //Use fastclick polyfill since ngTouch is deprecated from angular 1.5.x
    require('fastclick').attach(document.body)
}

routeConfig.$inject = ['$stateProvider','$urlRouterProvider','$compileProvider','cfpLoadingBarProvider','$httpProvider'];
function routeConfig($stateProvider,$urlRouterProvider,$compileProvider,cfpLoadingBarProvider,$httpProvider) {
    $compileProvider.debugInfoEnabled(false);
    cfpLoadingBarProvider.latencyThreshold = 400;
    
    //URL rewritings
    $urlRouterProvider.otherwise('/'); //Fallback
    $urlRouterProvider.when('/login/*path', 'login');
    /*$urlRouterProvider.when('/auction/lot/:id?*path', '/auction/lot/:id?page');*/
    //$urlRouterProvider.when('/auction/index/:id?*path', "/auction/lot/:id");
    $urlRouterProvider.when('/content/terms', '/terms');
    //$httpProvider.defaults.withCredentials = true; //needed for the browser to store api response cookies.
    
    $stateProvider
        .state('root', {
            abstract: true,
            views: {
                '@':{
                  controller:'AppController'  
                },
                'footer@': {
                    template:require('./components/footer/footer.html')
                }
            }
        })
    }

function AppController ($scope){
    $scope.root = {
        staticViewScroll:false
    }
}
AppController.$inject = ['$scope'];

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