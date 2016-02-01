import angular from "angular";
import pageTitleDirective from "./page-title-directive";

export default angular.module('mbva.page-title',[])
.directive('title',pageTitleDirective);