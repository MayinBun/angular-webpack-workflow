"use strict";

angular.module('mbva.config', [])

    .constant('ENV', 
    { name: 'production', 
    apiEndpoint: 'https://origin-api.bva-auctions.com/api/rest', 
    carouselEndpoint: 'https://api.bva-auctions.com/static/feeds/carousel_mobile.xml' 
    });
    
    
    