'use strict';
angular.module('mbva.login')
	.controller('LoginController', [
		'$scope',
		'$state',
		'login',
		'Session',
		'$previousState',
		function ($scope, $state, login, Session, $previousState) {
            var previous = $previousState.get();
			$scope.isLoggedin = false;
			$scope.loginError = false;
			$scope.credentials = {
				username: '',
				password: ''
			}
			$scope.login = function () {
				login({
					'username': $scope.credentials.username,
					'password': $scope.credentials.password,
				}).then(function (response) {
                    Session.create(response.data);
					if (previous != null) {
						$previousState.go();
					} else {
						$state.go("home");
					}
				}, function (error) {
					$scope.loginApiError = undefined;
					console.log(error);
					if (error.status === 404) {
						$scope.loginApiError = "Onjuiste gebruiksnaam en/of wachtwoord"
					}
				})
			}
		}])