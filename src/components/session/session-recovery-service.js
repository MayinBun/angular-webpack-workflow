/*angular.module('mbva.session')
	.factory('sessionRecovery', [
  '$q',
  '$injector',
  'Session',
  function($q,$injector, Session) {
    return {
      responseError: function(response) {
        var $state = $injector.get('$state');
  /*      var deffered = $q.defer();
        var $http = $injector.get('$http');*/
        //unauthorized
      /*  if (response.status === 401) {
          Session.destroy();
          $state.go('login');*/
       /*   var login = $injector.get('login');

          var storage = $injector.get('storage');*/
          //get last credentials from storage
         /* var credentials = {
            username:storage.get('username'),
            password:storage.get('password')
          }*/
          //try relogging
     /*     login(credentials).then(function(response){
            Session.create(response.data);
            deffered.resolve(response);
          },function(error){
            //failed to login with storage credentials
            state.go('login');
            $q.reject(response);
          });*/
          /*return deffered.promise.then(function(){
            return $http(response.config);
          })*/
    /*    }
        else if($state.current.name !== 'login' && response.status === 404){
            $state.go('404');
        }
        return $q.reject(response);
      }
    };
  }
])*/

let self;
export default class SessionRecoveryService {
    constructor($q,$state,SessionService){
        self = this;
        this.$q = $q;
        this.$state = $state;
        this.SessionService = SessionService
    }
    responseError (rejection) {
        if(rejection.status === 401){
            self.$state.go('login');
        }
    }
}