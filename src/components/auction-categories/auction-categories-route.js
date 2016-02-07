import categoriesTemplate from './auction-categories.html';
export default function routeConfig($stateProvider) {
    //Main/sub categories
    $stateProvider.state('categories', {
        parent: 'auction-overview',
        url: '^/auction/category/:auctionId',
        sticky: true,
        template: categoriesTemplate,
        controller: CategoriesController,
        controllerAs: 'vm',
        resolve: { AuctionCategories: getCategories }
    })
}
    function getCategories(AuctionCategoriesService, $stateParams) {
        return AuctionCategoriesService.getAuctionCategories($stateParams.auctionId);
    }
    getCategories.$inject = ['AuctionCategoriesService', '$stateParams'];

class CategoriesController {
    constructor($scope,$state, AuctionCategories) {
        this.$scope = $scope;
        this.$state = $state;
        this.page = this.$scope.tab.page || 1;
        this.categories = AuctionCategories.data;
    }
    redirectTo(categoryId) {
        this.$state.go('list', { category: categoryId, page: 1 });
    }
}
CategoriesController.$inject = ['$scope','$state','AuctionCategories'];
