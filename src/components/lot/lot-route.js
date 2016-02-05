import lotTemplate from './lot.html';
import LotController from './lot-controller';
export default function routeConfig ($stateProvider) {
    $stateProvider.state('lot', {
      parent:'root',
      url: '^/auction/lot/:auctionId/:lotId',
      views: {
        'staticView@': {
          template:lotTemplate,
          controller: LotController,
          resolve: {
            lot: lot,
            lotMedia: lotMedia,
            auction:auction
          }
        }
      }
    });

    function lot(LotService, $stateParams, $q) {
      let defer = $q.defer();
      LotService.getLot($stateParams.lotId).then(response => {
          defer.resolve(response);
      },(error) => {
          defer.resolve(error);
      }) 
      return defer.promise;
    }

    function lotMedia(LotService, $stateParams, $q) {
      let defer = $q.defer();
      LotService.getLotMedia($stateParams.lotId).then(response => {
        defer.resolve(response);
      }, (error) => {
        defer.resolve(error);
      })
      return defer.promise;
    }
    
    function auction(LotService,$stateParams,$q){
        var defer = $q.defer();
      LotService.getAuction($stateParams.auctionId).then(response => {
        defer.resolve(response);
      },(error) => {
        defer.resolve(error);
      })
      return defer.promise;
    }
}