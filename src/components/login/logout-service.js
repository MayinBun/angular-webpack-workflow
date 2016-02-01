angular
  .module('mbva.login')
  .factory('logout', [
    'resolve',
    function (resolve) {
      'use strict';
        var resource;
        resource = resolve('logout');
       return resource;
    }
  ])