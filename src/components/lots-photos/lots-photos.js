import angular from 'angular';
import utilities from '../utilities/utilities';
import lotsPhotosDirective from './lots-photos-directive';
import routeConfig from './lots-photos-route';
import './lots-photos.css';
export default angular.module('mbva.lots-photos',[
	utilities.name
])
.directive('lotsPhotos',lotsPhotosDirective)
.config(routeConfig)