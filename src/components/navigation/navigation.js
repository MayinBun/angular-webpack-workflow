import angular from 'angular';
import NavigationDirective from './navigation-directive'
import SessionModule from '../session/session';
import './navigation.css';

export default angular.module ('mbva.navigation',[SessionModule])
.directive ('navigationDirective',() => new NavigationDirective);