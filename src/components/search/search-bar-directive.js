angular.module('mbva.search')
  .directive('searchBar', [
    '$state',
    function ($state) {
      return {
        restrict: 'EA',
        templateUrl: "components/search/search-bar-tpl.html",
        link: function (scope, element, attr) {
          scope.submit = function () {
            if (scope.userInput !== undefined && scope.userInput !== "") {
              scope.showSearch = false;
              $state.go('search', { searchQuery: scope.userInput, page: 1 });
            }
          };
        },
      };
    }]);
