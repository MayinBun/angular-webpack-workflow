import angular from 'angular';
import timerDirective from './timer-directive';
import './timer-progressbar.css';
export default angular.module('mbva.timer',[])
.directive('timer',timerDirective);