import angular from 'angular';
import LoginService from './login-service';
import LoginController from './login-controller';
import routeConfig from './login-route';
import './login.css';

export default angular.module('mbva.login', [])
.service('LoginService',LoginService)
.controller('LoginController',LoginController)
.config(routeConfig);