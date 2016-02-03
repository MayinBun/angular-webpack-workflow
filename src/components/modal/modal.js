import angular from 'angular';
import './modal.css';
import modalDirective from './modal-directive';
angular.module("mbva.modal",[])
.directive('modalDirective',modalDirective);