
lotsPhotosDirective.$inject = ['$state','$stateParams','$timeout','LotsService','cache'];
export default function lotsPhotosDirective($state, $stateParams, $timeout, LotsService, cache) {
    return {
        scope: {
            lotsPhotos: '=lotsPhotos',
            count: '=',
        },
        template:require('./lots-photos-tpl.html'),
        link: function (scope, element, attr) {
            var numPages;
            var photosCache = cache.get('photoListCache');
            var page = 1;
            var auctionId = $stateParams.auctionId;

            if (photosCache) {
                if (cache.auctionId == auctionId)
                    page = cache.lastPage;
            }

            scope.$watch('count', function (value) {
                if (value !== undefined) {
                    numPages = Math.ceil(value / 25);
                }
            })

            scope.busy = false;
            $timeout(function () {
                scope.loadMore = function () {
                    if (scope.busy) return;
                    scope.busy = true;
                    if (page < numPages && numPages > 1) {
                        scope.busy = true;
                        page++;
                        LotsService.getLots(auctionId, page).then(response => {
                            for (var i = 0; i < response.lots.length; i++) {
                                var lot = response.lots[i];
                                scope.lotsPhotos.push(lot);
                            }
                            var cacheData = { 'lastPage': page, 'auctionId': auctionId }
                            cache.put('photoListCache', cacheData);
                            scope.busy = false;
                        })
                    }
                }
            })
        }
    }
}