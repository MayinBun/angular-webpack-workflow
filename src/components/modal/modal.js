import angular from 'angular';
import './modal.css';
import modalDirective from './modal-directive';
export default angular.module("mbva.modal",[])
.directive('modalDirective',modalDirective);