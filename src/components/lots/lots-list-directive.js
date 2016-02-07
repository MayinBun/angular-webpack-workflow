lotsListDirective.$inject = ['$state']
		export default function lotsListDirective ($state) {
			return {
				scope: {
					lotsList: '=lotsList',
					count: '=',
					page: '='
				},
				template: require('./lots-list-tpl.html'),
				link: function (scope, element, attr) {
					scope.pageChanged = function (toPage) {
						$state.go('list', { page: toPage });
					};
				}
			}
		}