import angular from 'angular';
import ngCookies from 'angular-cookies';
import template from './legal.html';
import './legal.css';

class ConsentDirective {
    constructor(){
        this.restrict = 'EA';
        this.scope = {};
        this.template = template;
        this.controller = ConsentController;
        this.controllerAs = 'vm';
    }
}

class ConsentController {
    constructor($cookies){
        this.$cookies = $cookies;
        this._consent = this.$cookies.get('consent');
    }
    consent (consent){
        if(consent === undefined){
            return this._consent;
        }
        else if(consent){
            this.$cookies.put('consent',true);
            this._consent = true;
        }
    }
}
ConsentController.$inject = ['$cookies'];

export default angular.module('mbva.legal', [ngCookies])
.directive('consentDirective',()=> new ConsentDirective);