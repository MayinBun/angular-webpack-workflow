import angular from 'angular';
import Platform from '../platform/platform';
import LotTargetingService from './lot-targeting-service';
import routeConfig from './lot-targeting-route';

export default angular.module('mbva.lot-targeting', [Platform.name])
    .service('LotTargetingService', LotTargetingService)
    .run(run);

function run($rootScope, $state, SessionService) {
    $rootScope.$on('$stateChangeStart', function (event, next, nextParams, prev, prevParams) {
        if (next.name === 'lot-targeting') {
            if (!SessionService.isLoggedin()) {
                event.preventDefault();
                $state.go('auctions-current');
            }
        }
    })
}
run.$inject = ['$rootScope', '$state', 'SessionService'];