import angular from 'angular';
import LoginService from './login-service';
import LoginController from './login-controller';
angular.module('mbva.login', [
	'mbva.utilities'
])
.service('LoginService',LoginService)
.controller('LoginController',LoginController);