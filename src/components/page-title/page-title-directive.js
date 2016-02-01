

export default function pageTitleDirective($rootScope, $timeout) {
    return {
      link: function(scope,elem,attrs) {
        var listener = function(event, toState) {
          $timeout(function() {
            //console.log(toState);
            $rootScope.title = (toState && toState.pageTitle) 
            ? toState.pageTitle 
            : 'BVA auctions - online veilingen'; //default title if 'pageTitle' parameter is not found on route
          });
        };
        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  };
  pageTitleDirective.$inject = ['$rootScope','$timeout'];