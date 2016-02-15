import angular from 'angular';
modalDirective.$inject = ['$document'];
export default function modalDirective($document) {
    return {
        restrict: "EA",
        template:require('./modal.html'),
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
}