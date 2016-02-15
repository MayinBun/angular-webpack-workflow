import angular from 'angular';
export default angular.module('mbva.lots.route',[])
.config(routeConfig)

function routeConfig($stateProvider) {
    $stateProvider.state('list', {
        parent: 'auction-overview',
        url: '^/auction/lot/:auctionId?page&category',
        sticky: true,
        resolve:{
               loadModule: ($q, $ocLazyLoad) => {
                return $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('./lots');
                        $ocLazyLoad.load({ name: module.default.name });
                        resolve(module);
                    })
                })
            }
        },
        views: {
            "overview": {
                resolve: {
                    AuctionLots: getAuctionLots
                },
                controller: LotsController,
                controllerAs: 'vm',
                template: ($stateParams) => {
                    if ($stateParams.category !== undefined) {
                        return "<div lots-list=vm.list page='vm.page' count='vm.list.totalLotCount'></div>";
                    }
                    else {
                        return "<div lots-list=vm.list.lots page='vm.page' count='vm.list.totalLotCount'></div>";
                    }
                }
            }
        }
    })
}
routeConfig.$inject = ['$stateProvider'];

class LotsController {
    constructor($scope, $stateParams, AuctionLots) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.list = AuctionLots.data;
        this.page = this.$stateParams.page || 1;

        this.$scope.tab.page = this.$stateParams.page;
        this.$scope.tab.category = this.$stateParams.category;
    }
}
LotsController.$inject = ['$scope', '$stateParams', 'AuctionLots']

function getAuctionLots(LotsService, $stateParams) {
    if ($stateParams.category) {
        return LotsService.getCategorieLots($stateParams.category);
    } else {
        return LotsService.getLots($stateParams.auctionId, $stateParams.page || 1);
    }
}
getAuctionLots.$inject = ['LotsService', '$stateParams'];