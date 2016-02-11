'use strict';
import angular from 'angular';
import './accordion-directive.css';
export default angular.module('accordion', [])
    .directive('accordionDirective',accordionDirective);
    
        function accordionDirective ($compile, $timeout) {
            return {
                restrict: 'AEC',
                controller:Controller,
                controllerAs:'vm',
                link: function (scope, el, attrs) {
                    var itemSelector = attrs.itemSelector || 'li',
                        titleSelector = attrs.titleSelector || 'h2',
                        contentSelector = attrs.contentSelector || 'div';
                    $timeout(function () {
                        var items = el[0].querySelectorAll(itemSelector);
                        for (var i in items) {
                            if (angular.isObject(items[i])) {
                                var title = items[i].querySelectorAll(titleSelector)[0];
                                var content = items[i].querySelectorAll(contentSelector)[0];

                                angular.element(items[i]).addClass('item').attr({
                                    'ng-class': '{\'open\':vm.current == ' + i + '}'
                                });
                                angular.element(title).addClass('title').attr('ng-click', 'vm.toggle(' + i + ')');
                                angular.element(content).addClass('content').attr({
                                    'ng-style': 'vm.current == ' + i + '?height[' + i + ']:vm.zero'
                                });;

                            }
                        }
                        $compile(angular.element(el).contents())(scope);
                    });
                }
            }
        }
        
         accordionDirective.$inject = ['$compile','$timeout'];
        
        class Controller {
            constructor(){
                this.current = null;
                this.zero = {
                    height:0
                };
            }
            toggle(i){
                this.current = this.current === i ? null : i;
            }
        }