import angular from 'angular';
export default angular.module('mbva.auctions.route',[])
.config(routeConfig);

function routeConfig($stateProvider) {
    $stateProvider
        .state('auctions-current', {
            parent: 'home',
            sticky: true,
            url: '/',
            views: {
                "home": {
                    template: require('./auctions.html'),
                    controller: AuctionsController,
                    controllerAs: 'vm',
                    resolve: {
                        AuctionsCurrent: getAuctions
                    }
                }
            },
            resolve: {
                loadModule: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./auctions');
                            $ocLazyLoad.load({ name: module.default.name });
                            resolve(module);
                        })
                    })
                }
            }
        })
}
routeConfig.$inject = ['$stateProvider'];

function getAuctions($q, AuctionsService) {
    let defer = $q.defer();
    AuctionsService.getAuctionsPaged(1).then(response => {
        defer.resolve(response.data);
    }, (error) => {
        defer.resolve(error);
    });
    return defer.promise;
}


class AuctionsController {
    constructor(AuctionsCurrent,AuctionsService) {
        this.auctions = AuctionsCurrent;
        this.AuctionsService = AuctionsService;
        this.currentPage = this.auctions.data ? Math.ceil(this.auctions.list.length / 25) || 1 : 0;
        this.pages = Math.ceil(this.auctions.totalSize / 25);
        console.log(this.currentPage);
      
        this.isLastPage = this.pages > this.currentPage;
    }
    loadMoreAuctions(){
        if(this.isLastPage){
          this.currentPage++;
          console.log(this.currentPage);
                        this.AuctionsService.getAuctionsPaged(this.currentPage).then(response => {
                            for (let i = 0; i < response.data.list.length; i++) {
                                var auction = response.data.list[i];
                                this.auctions.list.push(auction);
                            }
                        })
                        this.isLastPage = this.pages > this.currentPage;
                    
        }
    }
}
AuctionsController.$inject = ['AuctionsCurrent','AuctionsService'];