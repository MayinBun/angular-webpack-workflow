export default class StorageService {
    constructor($window){
        this.$window = $window;
    }
    get(key){
        return this.$window.localStorage.getItem(key);
    }
    set(key,value){
        return this.$window.localStorage.setItem(key, value);
    }
    unset(key){
        return this.$window.localStorage.removeItem(key);
    }
}