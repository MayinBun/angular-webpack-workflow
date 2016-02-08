import angular from 'angular';
import routeConfig from './login-route';
import './login.css';

export default angular.module('mbva.login', [])
.config(routeConfig);