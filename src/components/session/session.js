import angular from 'angular';
import SessionService from './session-service';
import Platform from '../platform/platform';

angular.module('mbva.session',[
    Platform.name
])
.service('SessionService', SessionService);

export default 'mbva.session';