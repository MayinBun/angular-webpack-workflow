import angular from 'angular';
import utils from '../utilities/utilities';
import NewsService from './news-service';

angular.module('mbva.news', [utils.name])
    .service('NewsService', NewsService)


function NewsController($scope, $state, $stateParams) {

    var id = $stateParams.id;
    $http({
        method: 'GET',
        url: ENV.apiEndpoint + '/ext123/content-items/news'
    }).then(function (response) {
        //console.log(response.data);
        $scope.content = [];
        for (var i = 0; i < response.data.length; i++) {
            //console.log(response.data[i].id);
            if (response.data[i].id == id) {
                $scope.content.push(response.data[i]);
            }
            else {
                $state.go('home');
            }
        }
    })
};