import angular from 'angular';
import Platform from '../platform/platform';
import SearchService from './search-service';
import routeConfig from './search-route';
export default angular.module("mbva.search", [Platform.name])
    .config(routeConfig)
    .service('SearchService',SearchService);
    
                             
                /*controller: [
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
        }]);*/
   