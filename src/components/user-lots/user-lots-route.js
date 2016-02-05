
import UserLotsController from './user-lots-controller';
export default function routeConfig($stateProvider) {
    $stateProvider
        .state('user-lots', {
            url: '/dashboard',
            template: require('./user-lots.html'),
            controller: UserLotsController,
            controllerAs:'vm',
            resolve: {
                userLots: ['UserLotsService', '$q', '$state',
                    function (UserLotsService, $q, $state) {
                        var defer = $q.defer();
                        UserLotsService.getUserLots().then(response => {
                            defer.resolve(response.data);
                        }, (error) => {
                            $q.reject(error);
                        });
                        return defer.promise;
                    }]
            }
        })
}