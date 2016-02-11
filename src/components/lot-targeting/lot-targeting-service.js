export default class LotTargetingService {
    constructor($http,platform){
        this.$http = $http;
        this.platform = platform;
    }
    getSelectedLots(){
        return this.$http.get(this.platform.API_ENDPOINT + '/ext123/lottargeting/selected');
    }
}
LotTargetingService.$inject = ['$http','platform'];