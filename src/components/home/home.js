import angular from "angular";
import routeConfig from "./home-route.js";
import CarouselModule from "../carousel/carousel";
import AuctionsModule from '../auctions/auctions';
import AuctionsFutureModule from '../auctions-future/auctions-future';
import LotTargetingModule from '../lot-targeting/lot-targeting';
import SearchBarModule from '../search-bar/search-bar';
import SearchModule from '../search/search';

console.log(LotTargetingModule.name);

export default angular.module('mbva.home', [
    CarouselModule.name,
    AuctionsModule.name,
    AuctionsFutureModule.name,
    LotTargetingModule.name,
    SearchBarModule.name,
    SearchModule.name
])
.config(routeConfig);
