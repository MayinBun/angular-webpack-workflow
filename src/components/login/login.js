import angular from 'angular';
import routeConfig from './login-route';
import './login.css';

export default angular.module('mbva.login', [
    require('./login-controller').default.name
])