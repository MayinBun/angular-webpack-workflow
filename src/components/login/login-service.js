export default class LoginService {
    constructor($http, platform) {
        this.$http = $http;
        this.platform = platform;
    }
    login(credentials) {
        return this.$http.post(this.platform.API_ENDPOINT + '/ext123/login', credentials, {
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    logout() {
        return this.$http.post(this.platform.API_ENDPOINT + '/ext123/logout');
    }
}
LoginService.$inject = ['$http', 'platform'];