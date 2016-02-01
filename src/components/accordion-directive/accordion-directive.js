'use strict';
angular.module('accordion', [])
    .directive('accordionDirective', ['$compile', '$timeout',
        function ($compile, $timeout) {
            return {
                restrict: 'AEC',
                controller: ['$scope', function ($scope) {
                    $scope.current = null;
                    $scope.zero = {
                        height: 0
                    };
                    $scope.toggle = function (i) {
                        $scope.current = $scope.current === i ? null : i;
                    };
                }],
                link: function (scope, el, attrs) {
                    var itemSelector = attrs.itemSelector || 'li',
                        titleSelector = attrs.titleSelector || 'h2',
                        contentSelector = attrs.contentSelector || 'div';
                    $timeout(function () {
                        var items = el[0].querySelectorAll(itemSelector);
                        for (var i in items) {
                            if (angular.isObject(items[i])) {
                                var title = items[i].querySelectorAll(titleSelector)[0];
                                var content = items[i].querySelectorAll(contentSelector)[0];

                                angular.element(items[i]).addClass('item').attr({
                                    'ng-class': '{\'open\':current == ' + i + '}'
                                });
                                angular.element(title).addClass('title').attr('ng-click', 'toggle(' + i + ')');
                                angular.element(content).addClass('content').attr({
                                    'ng-style': 'current == ' + i + '?height[' + i + ']:zero'
                                });;

                            }
                        }
                        $compile(angular.element(el).contents())(scope);
                    });
                }
            }
        }]);