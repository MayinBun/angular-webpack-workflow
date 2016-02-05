import angular from 'angular';
import staticContentDirective from './static-content';
import accordionDirective from '../accordion-directive/accordion-directive';
angular.module('mbva.static', [accordionDirective.name])
.directive('staticContent',staticContentDirective)

  .config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('customerservice', {
      url: '/customerservice',
      parent:'root',
      views: {
        'staticView@': {
          template: "<div static-content template-url='components/static/customerservice.html'></div>"
        }
      }
    })
      .state('terms', {
        parent:'root',
        url: '/terms',
        views: {
          'staticView@': {
            template: "<div static-content template-url = 'components/static/terms.html'></div>"
          }
        }
      })
      .state('about', {
        parent:"root",
        url: '/about',
        views: {
          'staticView@': {
            template: "<div static-content template-url = 'components/static/about.html'></div>"
          }
        }
      })
      .state('contact', {
        parent:'root',
        url:'/contact',
        views: {
          'staticView@': {
              template:"<div static-content template-url ='components/static/contact.html'></div>"
          }
        }
      })
      .state('news', {
        parent:'root',
        url: '/news/index/:id',
        views:{
          'staticView@':{
              templateUrl: "components/static/news.html",
              controller: "NewsController"
          }
        }
      })
      .state('invoices', {
        parent:'root',
        url:'/invoices',
        views: {
          'staticView@': {
            template: "<div static-content template-url ='components/static/invoices.html'></div>"
          }
        }
      })
      .state('cookie', {
        parent:'root',
        url: '/cookies',
        views: {
          'staticView@': {
            template: "<div static-content template-url = 'components/static/cookie.html'></div>"
          }
        }
      })
       .state('faq', {
        parent:'root',
        url: '/faq',
        views: {
          'staticView@': {
              template: "<div static-content template-url = 'components/static/faq.html'></div>"
          }
        }
      });

  }])

  .controller('NewsController',['$scope','$stateParams','$http','$sce', 
  function ($scope, $stateParams, $http, $sce) {
    var id = $stateParams.id;
    $http.get("http://origin.bva-auctions.com/news/index/" + id).then(function (res) {
      $scope.content = $sce.trustAsHtml(res.data);
    });
  }]);
