import UserLotsController from './user-lots-controller';
import template from './user-lots.html';
export default function routeConfig($stateProvider) {
    $stateProvider
        .state('user-lots', {
            url: '/dashboard',
            template:template,
            controller: UserLotsController,
            resolve: {
                userLots:['UserLotsService','$q','$state',function (UserLotsService, $q, $state) {
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
routeConfig.$inject = ['$stateProvider'];