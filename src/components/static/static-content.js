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
}