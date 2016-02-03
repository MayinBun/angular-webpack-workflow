import template from './navigation.html';

    export default class NavigationDirective {
        constructor() {
            this.restrict = 'EA';
            this.template = template;
            this.controller = NavigationController;
            this.controllerAs = 'vm';
        }
    }
    
    class NavigationController {
        constructor(SessionService){
            this.SessionService = SessionService;
            this.is = {loggedin:this.SessionService.isLoggedin()};
        }
        logOut (){
            /* logout.save(function (response) {
                            Session.destroy();
                            $scope.is.loggedin = Session.isLoggedin();
                            $state.reload();
                        })*/
                        console.log('loggedout');
        }
    }
    
    NavigationController.$inject = ['SessionService'];
/*    .directive('navigationDirective', [
        '$state',
        'Session',
        'logout',
        function ($state, Session, logout) {
            return {
                restrict: "EA",
                templateUrl: "components/navigation/navigation-bar-tpl.html",
                controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
                    $scope.is = { loggedin: Session.isLoggedin() }
                    $scope.auctionsummary = { showOverlay: false, showInfoButton: false } 
                    //console.log($scope.is.loggedin);
                    $scope.logOut = function () {
                        logout.save(function (response) {
                            Session.destroy();
                            $scope.is.loggedin = Session.isLoggedin();
                            $state.reload();
                        })
                    }
                    //Watch for loggedin status
                    $scope.$watch(function () {
                        return Session.isLoggedin();
                    }, function (newVal, oldVal) {
                        if (newVal !== oldVal) {
                            $scope.is = { loggedin: Session.isLoggedin() }
                        }
                    })
                }]
            }
        }])*/