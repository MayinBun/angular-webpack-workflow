import {Platform} from '../platform/platform';
export default class SessionService extends Platform {
    constructor($cookies,$http) {
        super($http);
        this.$cookies = $cookies;
        this.user = {};
    }
    create(user) {
        this.user = user;
        this.$cookies.put('isLoggedin', !!this.user);
    }
    destroy() {
        this.user = '';
        this.$cookies.remove('isLoggedin');
    }
    isLoggedin() {
        return !!this.$cookies.get('isLoggedin');
    }
    LOGIN(credentials) {
        return this.$http.post(this.platform + '/ext123/login', credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    LOGOUT() {
        return this.$http({
            method: 'POST',
            url: this.platform + '/ext123/logout',
            transformResponse: (text) => {
                return text;
            }
        });
    }
}
SessionService.$inject = ['$cookies','$http'];