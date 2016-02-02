import angular from "angular";
import routeConfig from "./home-route.js";
import CarouselModule from "../carousel/carousel";
import AuctionsModule from '../auctions/auctions';
import AuctionsFutureModule from '../auctions-future/auctions-future';

export default angular.module('mbva.home', [
    CarouselModule.name,
    AuctionsModule.name,
    AuctionsFutureModule.name
/*  'mbva.auctions-future',
  //'mbva.auctions-targeting',
  'mbva.search'*/
])
.config(routeConfig);
