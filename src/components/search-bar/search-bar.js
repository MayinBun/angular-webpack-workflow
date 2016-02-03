import angular from 'angular';
import searchBarDirective from './search-bar-directive';
export default angular.module('mbva.search-bar',[])
.directive('searchBar',searchBarDirective);