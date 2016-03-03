(function () {
    'use strict';
    angular.module('app.landing.slider')
        .directive('slider', [sliderDirective]);

    function sliderDirective() {
        return {
            restrict: 'E',
            templateUrl: 'landing/slider/slider.html',
            scope: {},
            link: linkFunction,
            controller: SliderController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    function linkFunction(scope, element, attrs, controller) {

    }


    SliderController.$inject = [];

    function SliderController() {
        var vm = this;


    }
})();