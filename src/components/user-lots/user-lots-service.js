export default class UserLotsService {
    constructor($http, platform) {
        this.$http = $http;
        this.platform = platform;
    }
    getUserLots() {
        return this.$http.get(this.platform.API_ENDPOINT + '/followedlots');
    }
}
UserLotsService.$inject = ['$http','platform'];