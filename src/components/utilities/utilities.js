import angular from "angular";
import StorageService from "./utilities-storage-service";
import CacheService from "./utilities-cache-service";

export default angular.module('mbva.utilities',[])
.service('storage',()=> new StorageService)
.service('cache',()=> new CacheService);