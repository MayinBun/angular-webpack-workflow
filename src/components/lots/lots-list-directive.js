lotsListDirective.$inject = ['$state','$stateParams']
		export default function lotsListDirective ($state,$stateParams) {
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
		}