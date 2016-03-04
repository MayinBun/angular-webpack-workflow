import NewsController from './news-controller';
import NewsService from './news-service';
routeConfig.$inject = ['$stateProvider'];
export default function routeConfig($stateProvider) {
    $stateProvider.state('news', {
        parent: 'root',
        url: '/news/index/:id',
        views: {
            'staticView@': {
                template: require('./news.html'),
                controller: NewsController,
                resolve: {

                }
            }
        }
    })
}