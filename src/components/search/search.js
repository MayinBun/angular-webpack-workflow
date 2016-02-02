import angular from 'angular';
import Platform from '../platform/platform';
import searchBarDirective from './search-bar-directive';
angular.module("mbva.search", [Platform.name])
.directive('searchBar',searchBarDirective)
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('search', {
                url: "/search?searchQuery&page",
                templateUrl: "components/search/search.html",
                resolve: {
                    searchLots: [
                        'searchService',
                        '$stateParams',
                        function (searchService, $stateParams) {
                            return searchService($stateParams.searchQuery, $stateParams.page || 1).get(function (response) {
                                return response;
                            });
                        }
                    ]
                },
                controller: [
                    '$scope',
                    '$stateParams',
                    '$state',
                    'searchLots',
                    function ($scope, $stateParams, $state, searchLots) {
                        $scope.searchQuery = $stateParams.searchQuery;
                        $scope.page = $stateParams.page;
                        $scope.result = searchLots;
                        $scope.totalHits = searchLots.totalHits || 0;
                        $scope.pageChanged = function (toPage) {
                            $state.go('search', { page: toPage });
                        }
                    }
                ]
            })
        }]);