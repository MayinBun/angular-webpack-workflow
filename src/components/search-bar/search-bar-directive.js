import angular from 'angular';
import searchBarTemplate from './search-bar.html';

searchBarDirective.$inject = ['$state'];
export default function searchBarDirective ($state) {
    return {
        restrict: 'EA',
        template:searchBarTemplate,
        link: function (scope, element, attr) {
            scope.submit = function () {
                if (scope.userInput !== undefined && scope.userInput !== "") {
                    scope.showSearch = false;
                    $state.go('search', { searchQuery: scope.userInput, page: 1 });
                }
            };
        },
    };
};