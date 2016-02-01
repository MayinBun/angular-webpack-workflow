angular.module("mbva.modal")
    .directive("modalDirective", ['$document',
        function ($document) {
            return {
                restrict: "EA",
                templateUrl: "components/modal/modal-tpl.html",
                replace: true,
                transclude: true,
                scope: {
                    isVisible: "="
                },
                link: function (scope, element, attrs) {
                    var body = angular.element($document[0].body);

                    scope.$watch('isVisible', function (value) {
                        if (value) {
                            body.addClass('hide-overflow');
                            scope.isVisible = true;
                        }
                        else {
                            body.removeClass('hide-overflow');
                            scope.isVisible = false;
                        }
                    })

                    element.on("click", function handleClickEvent(event) {
                        if (event.target !== element[0]) {
                            return;
                        }
                        scope.$apply(scope.isVisible = false);
                    });
                }
            }
        }])