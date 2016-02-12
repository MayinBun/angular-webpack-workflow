import angular from 'angular';
import SessionService from './session-service';
import SessionRecoveryService from './session-recovery-service';
import Platform from '../platform/platform';

angular.module('mbva.session',[
    Platform.name
])
.service('SessionService', SessionService)
.service('SessionRecoveryService',SessionRecoveryService);

export default 'mbva.session';