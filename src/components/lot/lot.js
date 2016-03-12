import angular from 'angular';
import ImageSlider from '../image-slider/image-slider';
import LotService from './lot-service';
import LotController from './lot-controller';
import './lot.css';
export default angular.module('mbva.lot', [ImageSlider.name])
.service('LotService',LotService)
.controller('LotController',LotController)