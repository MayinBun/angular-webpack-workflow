/*
Use in route configurations like below
@pageTitle: If left empty, pageTitle will be 'BVA auctions - online veilingen'

 $stateProvider
        .state('yourstatename', {
            url: '/yoururl',
            pageTitle: 'Your | PageTitle
         })
 */

export default function pageTitleDirective($rootScope, $timeout) {
    return {
        link: function (scope, elem, attrs) {
            var listener = function (event, toState) {
                $timeout(function () {
                    //console.log(toState);
                    $rootScope.title = (toState && toState.pageTitle)
                        ? toState.pageTitle
                        : 'BVA auctions - online veilingen';
                });
            };
            $rootScope.$on('$stateChangeSuccess', listener);
        }
    };
};
pageTitleDirective.$inject = ['$rootScope', '$timeout'];