export default class SessionService {
    constructor($cookies){
        this.$cookies = $cookies;
        this.user = {};
    }
    create (user){
        this.user = user;
        this.$cookies.put('isLoggedin',!!this.user);
    }
    destroy (){
        this.user = '';
        this.$cookies.remove('isLoggedin');
    }
    isLoggedin (){
        return !!this.$cookies.get('isLoggedin');
    }
}
SessionService.$inject = ['$cookies'];