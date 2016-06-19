/**
 * Service for dynamicaly loading language translated key:values for components and pages based on the currently
 * selected language.
 * Setup:
 *      - create a json file containing all translated text in key:value pairs
 *      - create a folder with the name you want to use as id for that component or page in /app-data/i18n/
 *              forexample: /app-data/i18n/my-component/
 *      - save your json files with the iso value of the language;
 *              foreaxmple nl.json
 *      - place ur json file into the directory you created in /app-data/i18n/
 *              forexample: app-data/i18n/my-component/nl.json
 * Usage: in your component or page do:
 *          i18nLoaderService.load('__NAME__').then(function(data) { $scope.i18n = data; });
 */

class i18nLoaderService {
    constructor($http, $timeout, $q) {
        this.$http = $http;
        this.$timeout = $timeout;
        this.$q = $q;
        this.STORAGE = {};
    }
    load(name) {
        console.log('i18n-loader-service.js::_load');
        var defer = this.$q.defer(),
            langObj = this.STORAGE[name];

        if (langObj) {
            this.$timeout(function () {
                console.log('i18n-loader-service.js::_load::RESOLVE(local)');
                defer.resolve(langObj);
            }, 10);
        }
        else {
            this.$http.get('/v2/assets/static/i18n/' + name + '/' + _fileName)
                .then(
                function (response) {
                    console.log('i18n-loader-service.js::_load::RESOLVE(remote)');

                    //store the translations locally for future use
                    STORAGE[name] = response.data;

                    defer.resolve(response.data);
                },
                function (response, status, headers, config) {
                    console.error(
                        'i18n-loader-service.js::_load::$http.get.ERROR -- ',
                        'failed to load language json file', arguments
                    );

                }
                );

        }
    }
}