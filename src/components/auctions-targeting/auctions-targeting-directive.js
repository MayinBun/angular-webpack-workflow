angular.module("mbva.auctions-targeting")
    .directive("auctionsTargetingDirective",['auctionsTargetingService',
    function(auctionsTargetingService){
        return {
            templateUrl:"components/auctions-targeting/auctions-targeting-tpl.html",
            link:function(scope,element,attrs){
                scope.auctionsTargeting = [];
                auctionsTargetingService.query(function(response){
                    scope.auctionsTargeting = response;
                })
            }
        }
    }])