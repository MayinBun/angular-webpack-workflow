import categoriesTemplate from './auction-categories.html';
    export default function routeConfig($stateProvider) {
      //Main/sub categories
      $stateProvider.state("categories", {
        parent: "auction-overview",
        url: "^/auction/category/:auctionId",
        sticky: true,
        deepStateRedirect: true,
        template: categoriesTemplate,
        controller: CategoriesController,
        controllerAs:'vm',
        resolve: { AuctionCategories: getCategories }
      })
      
      getCategories.$inject = ['AuctionCategoriesService','$stateParams'];
      function getCategories(AuctionCategoriesService, $stateParams) {
        return AuctionCategoriesService.getAuctionCategories($stateParams.auctionId);
      }
      
      
      CategoriesController.$inject = ['$state','AuctionCategories'];
      class CategoriesController {
          constructor($state,AuctionCategories){
              this.$state = $state;
              this.categories = AuctionCategories;
          }
          redirectTo(categoryId){
              this.$state.go('list',{category:categoryId,page:1});
          }
      }
    }