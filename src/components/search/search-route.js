import searchTemplate from './search.html';
export default function routeConfig($stateProvider) {
    $stateProvider
        .state('search', {
            parent: 'root',
            url: '/search?searchQuery&page',
            views: {
                "@": {
                    template: searchTemplate,
                    controller: SearchController,
                    controllerAs: 'vm',
                    resolve: {
                        searchLots: getSearchLots
                    }
                }
            }
        })
}
routeConfig.$inject = ['$stateProvider'];

getSearchLots.$inject = ['SearchService', '$stateParams'];
function getSearchLots(SearchService, $stateParams) {
    return SearchService.searchQuery($stateParams.searchQuery, $stateParams.page || 1).then(response => response);
}


class SearchController {
    constructor($stateParams, $state, searchLots) {
        this.$stateParams = $stateParams;
        this.$state = $state;
        this.result = searchLots;

        this.totalHits = this.result.totalHits || 0;
        this.page = this.$stateParams.page;

    }
    pageChanged(toPage) {
        this.$state.go('search', { page: toPage });
    }
}
SearchController.$inject = ['$stateParams', '$state', 'searchLots'];

/*    .config([
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
                },*/