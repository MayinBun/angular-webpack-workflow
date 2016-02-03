/*'use strict';
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
		}])*/
        
        LoginController.$inject = ['$state','$previousState','LoginService','SessionService'];
        export default class LoginController {
            constructor($state,$previousState,LoginService,SessionService){
                this.loginError = false;
                this.$state = $state;
                this.$previousState = $previousState;
                this.previous = $previousState.get();
                this.auth = LoginService;
                this.session = SessionService;
                this.credentials = {
                    username:'',
                    password:''
                }
            }
            login(){
                this.auth.login(this.credentials).then(response => {
                    this.session.create(response.data);
                    if(this.previous != null){
                        this.$previousState.go();
                    }else{
                        this.$state.go('home');
                    }
                },(error)=>{
                    this.loginError = false;
                    if(error.status === 404){
                        this.loginError = 'Onjuiste gebruiksnaam en/of wachtwoord'
                    }
                })
            }
        }