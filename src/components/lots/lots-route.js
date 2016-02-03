export default function routeConfig($stateProvider) {
    $stateProvider.state("list", {
        parent: 'auction-overview',
        url: "^/auction/lot/:auctionId?page&category",
        sticky: true,
        resolve: {
            AuctionLots: getAuctionLots
        },
        controller: LotsController,
        controllerAs: 'vm',
        template: function ($stateParams, auctionLots) {
            if ($stateParams.category !== undefined) {
                return "<div lots-list=list page='page' count='list.totalLotCount'></div>";
            }
            else {
                return "<div lots-list=list.lots page='page' count='list.totalLotCount'></div>";
            }
        }
    })
}

class LotsController {
    constructor($stateParams, AuctionLots) {
        this.$stateParams = $stateParams;
        this.list =
        this.page = this.$stateParams.page || 1;
        this.tab.page = this.$stateParams.page;
        this.tab.category = this.$stateParams.category;
    }
}

function getAuctionLots(auctionCategoriesLots, LotsService, $stateParams) {
    if ($stateParams.category) {
        return auctionCategoriesLots($stateParams.category).query();
    } else {
        return LotsService.getLots($stateParams.auctionId, $stateParams.page || 1);
    }
}