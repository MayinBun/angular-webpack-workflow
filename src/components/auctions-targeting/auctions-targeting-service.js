angular.module("mbva.auctions-targeting")
    .factory("auctionsTargetingService",['resolve',
    function(resolve){
        return resolve("ext123/auctionstargeting/interested");
    }])