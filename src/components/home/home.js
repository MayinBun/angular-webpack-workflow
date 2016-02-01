import angular from "angular";
import routeConfig from "./home-route.js";
import CarouselModule from "../carousel/carousel";
import AuctionsModule from '../auctions/auctions';

export default angular.module('mbva.home', [
    CarouselModule.name,
    AuctionsModule.name
/*  'mbva.auctions-future',
  //'mbva.auctions-targeting',
  'mbva.search'*/
])
.config(routeConfig);
