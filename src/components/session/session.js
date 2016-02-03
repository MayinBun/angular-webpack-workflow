import angular from 'angular';
import SessionService from './session-service';

angular.module('mbva.session',[])
.service('SessionService', SessionService);

export default 'mbva.session';