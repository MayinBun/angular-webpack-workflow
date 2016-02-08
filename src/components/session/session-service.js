export default class SessionService {
    constructor($cookies, $http, platform) {
        this.$cookies = $cookies;
        this.$http = $http;
        this.platform = platform;
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
        return this.$http.post(this.platform.API_ENDPOINT + '/ext123/login', credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    LOGOUT() {
        return this.$http({
            method: 'POST',
            url: this.platform.API_ENDPOINT + '/ext123/logout',
            transformResponse: (text) => {
                return text;
            }
        });
    }
}
SessionService.$inject = ['$cookies', '$http', 'platform'];