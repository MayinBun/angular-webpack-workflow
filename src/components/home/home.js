import angular from "angular";
import routeConfig from "./home-route.js";
import CarouselModule from "../carousel/carousel";

export default angular.module('mbva.home', [
    CarouselModule.name
  /*'mbva.carousel',
  'mbva.auctions',
  'mbva.auctions-future',
  //'mbva.auctions-targeting',
  'mbva.search'*/
])
.config(routeConfig);
