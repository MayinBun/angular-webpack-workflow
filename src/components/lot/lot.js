import angular from 'angular';
import ImageSlider from '../image-slider/image-slider';
import './lot.css';
import routeConfig from './lot-route';
import LotService from './lot-service';
export default angular.module('mbva.lot', [ImageSlider.name])
.config(routeConfig)
.service('LotService',LotService)