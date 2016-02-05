import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import uiRouterExtras from 'ui-router-extras/release/ct-ui-router-extras.js';

//Modules
import HomeModule from './components/home/home';
import NavigationModule from './components/navigation/navigation';
import LegalModule from './components/legal/legal';
import PageTitleModule from './components/page-title/page-title';
import TimerModule from './components/timer/timer';
import UserLotsModule from './components/user-lots/user-lots';

//Global templates & css
import footerTemplate from "./components/footer/footer.html";
import './app.css';
import 'flexboxgrid/css/flexboxgrid.css';
//import 'font-awesome/css/font-awesome.css';

angular.module('mbva.app', [
    uiRouter,
    ngAnimate,
    HomeModule.name,
    UserLotsModule.name,
    NavigationModule.name,
    LegalModule.name,
    PageTitleModule.name,
    TimerModule.name,
    'ct.ui.router.extras'
])
.config(routeConfig)
.controller('AppController',() => new AppController);


function routeConfig($stateProvider,$urlRouterProvider) {
    //URL rewritings
    $urlRouterProvider.otherwise('/'); //Fallback
    $urlRouterProvider.when('/login/*path', 'login');
    $urlRouterProvider.when('/auction/lot/:id?*path', '/auction/lot/:id?page');
    $urlRouterProvider.when('/auction/index/:id?*path', "/auction/lot/:id");
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
routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];

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