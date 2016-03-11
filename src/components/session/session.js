import angular from 'angular';
import SessionService from './session-service';
import SessionRecoveryService from './session-recovery-service';

angular.module('mbva.session',[])
.service('SessionService', SessionService)
.service('SessionRecoveryService',SessionRecoveryService);

export default 'mbva.session';