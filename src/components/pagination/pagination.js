import angular from 'angular';
import './pagination.css';
import paginationDirective from './pagination-directive';
export default angular.module('mbva.pagination',[])
.directive('pagination',paginationDirective);