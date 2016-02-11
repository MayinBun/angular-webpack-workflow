import angular from 'angular';
import staticContentDirective from './static-content';
import accordionDirective from '../accordion-directive/accordion-directive';
export default angular.module('mbva.static', [accordionDirective.name])
.directive('staticContent',staticContentDirective)
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('customerservice', {
      url: '/customerservice',
      parent:'root',
      views: {
        'staticView@': {
          template: require('./customerservice.html')
        }
      }
    })
      .state('terms', {
        parent:'root',
        url: '/terms',
        views: {
          'staticView@': {
            template: require('./terms.html')
          }
        }
      })
      .state('about', {
        parent:"root",
        url: '/about',
        views: {
          'staticView@': {
            template:require('./about.html')
          }
        }
      })
      .state('contact', {
        parent:'root',
        url:'/contact',
        views: {
          'staticView@': {
              template:require('./contact.html')
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
            template: require('./invoices.html')
          }
        }
      })
      .state('cookie', {
        parent:'root',
        url: '/cookies',
        views: {
          'staticView@': {
            template: require('./cookie.html')
          }
        }
      })
       .state('faq', {
        parent:'root',
        url: '/faq',
        views: {
          'staticView@': {
              template: require('./faq.html')
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
