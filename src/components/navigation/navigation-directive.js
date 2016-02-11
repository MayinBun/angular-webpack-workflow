import template from './navigation.html';
import logo from '../../images/bva_logo.svg';

export default class NavigationDirective {
    constructor(NavigationService) {
        this.restrict = 'EA';
        this.template = template;
        this.controller = NavigationController;
        this.controllerAs = 'nav';
        this.service = NavigationService;
    }
}

class NavigationController {
    constructor($scope,$state, SessionService) {
        this.$scope = $scope;
        this.$state = $state;
        this.SessionService = SessionService;
        this.logo = logo;
        
        this.$scope.auctionsummary = { showOverlay: false, showInfoButton: false } 
        this.is = { loggedin: this.SessionService.isLoggedin()};   
        //Watch for loggedin status
        this.$scope.$watch(() => {
            return this.SessionService.isLoggedin();
        }, (newVal, oldVal) => {
            if (newVal !== oldVal) {
                this.is.loggedin = this.SessionService.isLoggedin()
            }
        })
    }
    
    logOut() {
        this.SessionService.LOGOUT().then(response => {
         this.SessionService.destroy();
         this.is.loggedin = this.SessionService.isLoggedin();
         this.$state.reload();   
        });
    }
}

NavigationController.$inject = ['$scope','$state','SessionService'];
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