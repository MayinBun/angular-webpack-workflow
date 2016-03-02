import angular from 'angular';
import searchBarTemplate from './search-bar.html';

searchBarDirective.$inject = ['$state', '$timeout'];
export default function searchBarDirective($state, $timeout) {
    return {
        restrict: 'EA',
        scope:{
            isVisible:'=',
        },
        template: searchBarTemplate,
        link: function (scope, element, attr) {
            //var input = angular.element('#search-input');
   /*         scope.$watch('isVisible', function (value) {
                if (scope.openFocused) {
                    $timeout(function () {
                        //input.focus();
                    })
                }
            })*/
            //console.log(element[0]);
            //console.log(attr);
            scope.submit = function () {
                if (scope.userInput !== undefined && scope.userInput !== "") {
                    $timeout(function () {
                        //input.blur();
                        $state.go('search', { searchQuery: scope.userInput, page: 1 });
                    })
                }
            };
        },
    };
};