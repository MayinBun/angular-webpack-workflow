angular.module('mbva.lots')
	.directive('lotsList', [
		'$state',
		'$stateParams',
		'lotsService',
		function ($state,$stateParams,lotsService) {
			return {
				scope: {
					lotsList: '=lotsList',
					count: '=',
					page: '='
				},
				templateUrl: 'components/lots/lots-list-tpl.html',
				link: function (scope, element, attr) {
					scope.pageChanged = function (toPage) {
						$state.go('list', { page: toPage });
					};
				}
			}
		}])