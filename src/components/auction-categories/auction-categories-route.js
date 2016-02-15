import angular from 'angular';
export default angular.module('mbva.auction-categories.route',[])
.config(routeConfig);

function routeConfig($stateProvider) {
    //Main/sub categories
    $stateProvider.state('categories', {
        parent: 'auction-overview',
        url: '^/auction/category/:auctionId',
        sticky: true,
        resolve: {
            loadModule: ($q, $ocLazyLoad) => {
                return $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('./auction-categories');
                        $ocLazyLoad.load({ name: module.default.name });
                        resolve(module);
                    })
                })
            }
        },
        views: {
            "overview": {
                template: require('./auction-categories.html'),
                controller: CategoriesController,
                controllerAs: 'vm',
                resolve: { AuctionCategories: getCategories }
            }
        }
    })
}
routeConfig.$inject = ['$stateProvider'];

function getCategories(AuctionCategoriesService, $stateParams) {
    return AuctionCategoriesService.getAuctionCategories($stateParams.auctionId);
}

class CategoriesController {
    constructor($scope, $state, AuctionCategories) {
        this.$scope = $scope;
        this.$state = $state;
        this.categories = AuctionCategories.data;
    }
    /*redirectTo(categoryId) {
        this.$state.go('list', { category: categoryId, page: 1 });
    }*/
}
CategoriesController.$inject = ['$scope', '$state', 'AuctionCategories'];
