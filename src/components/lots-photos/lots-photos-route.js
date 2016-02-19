export default function routeConfig($stateProvider) {
    'use strict';
    $stateProvider.state('photos', {
        parent: 'auction-overview',
        url: '^/auction/lot/photos/:auctionId?page&category',
        sticky: true,
        views: {
            "overview": {
                resolve:{
                    photos:auctionLots
                },
                controller: ['$scope', '$stateParams','photos',
                    function ($scope, $stateParams,photos) {
                        console.log(photos);
                        $scope.list = photos.data;
                        $scope.page = 1;
                        $scope.tab.category = $stateParams.category;
                    }],
                template: function ($stateParams) {
                    if ($stateParams.category !== undefined) {
                        return "<div lots-photos=list count='list.totalLotCount'></div>";
                    }
                    else {
                        return "<div lots-photos=list.lots page='page' count='list.totalLotCount'></div>";
                    }
                }
            }
        }
    })
}
routeConfig.$inject = ['$stateProvider'];

auctionLots.$inject = ['LotsService', '$stateParams'];
function auctionLots(LotsService, $stateParams) {
    if ($stateParams.category) {
        return LotsService.getCategorieLots($stateParams.category).then(response => response);
    } else {
        return LotsService.getLots($stateParams.auctionId, 1).then(response => response);
    }
}