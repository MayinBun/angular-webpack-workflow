import angular from 'angular';
import AuctionsRoute from '../auctions/auctions-route';

export default angular.module('mbva.home.route', [
    //Child routes
    require('../auctions/auctions-route').default.name,
    require('../auctions-future/auctions-future-route').default.name,
    require('../lot-targeting/lot-targeting-route').default.name
]).config(routeConfig)


function routeConfig($stateProvider) {
    $stateProvider
        .state('home', {
            parent: 'root',
            url:"",
            deepStateRedirect: {
                default: { state: 'auctions-current' }
            },
            resolve: {
                loadModule: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./home');
                            $ocLazyLoad.load({ name: module.default.name });
                            resolve(module);
                        })
                    })
                }
            },
            views: {
                "@": {
                    template: require('./home.html')
                }
            }
        })
}
routeConfig.$inject = ['$stateProvider'];