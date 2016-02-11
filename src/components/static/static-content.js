/*angular.module('mbva.static')
    .directive("staticContent", function () {
        return {
            templateUrl: function (tElem, tAttrs) {
                return tAttrs.templateUrl;
            },
            controller: ['$scope', '$element', '$attrs',
                function ($scope, $element, $attrs) {
                    $scope.root.staticscroll = true;
                    $scope.$on('$destroy', function () {
                        $scope.root.staticscroll = false;
                    })
                }]
        }
    })*/

export default function staticContentDirective() {
    return {
        template: function (tElem, tAttrs) {
            return tAttrs.templateUrl;
        },
        controller:Controller
    }
}

class Controller{
    constructor($scope){
       /* this.$scope = $scope;
        this.$scope.$on('$destroy',function(){
            this.$scope.root.staticscroll = false;
        })*/
    }
}
Controller.$inject= ['$scope'];