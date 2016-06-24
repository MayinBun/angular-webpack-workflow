angular.module('mbva.auction-extra-terms')
    .factory('auctionExtraTermsService', ['resolve', function (resolve) {
        var service = {
            acceptExtraTerms:_acceptExtraTerms,
            getExtraTerms:_getExtraTerms
        }
        return service;

        function _acceptExtraTerms(auctionId) {
            var resource;
            resource = resolve("ext123/accepted_auction_terms/", auctionId, {
                //Override default transformResponse to prevent "Unexpected token o errors"
                save: {
                    method: 'POST',
                    isArray: false,
                },
                remove: {
                    method: 'DELETE',
                    isArray: false,
                }
            });
            return resource;
        }


        function _getExtraTerms(auctionId) {
            var resource;
            resource = resolve('ext123/accepted_auction_terms/' + auctionId);
            return resource;
        }
    }])