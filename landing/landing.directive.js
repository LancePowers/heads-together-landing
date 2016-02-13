(function () {
    'use strict';
    angular.module('app.landing')
        .directive('landing', [landingDirective]);

    function landingDirective() {
        return {
            restrict: 'E',
            templateUrl: 'landing/landing.html',
            scope: {},
            link: linkFunction,
            controller: LandingController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    function linkFunction(scope, element, attrs, controller) {

    }


    LandingController.$inject = [];

    function LandingController() {
        var vm = this;
        vm.menuItems = [{
            display: 'features',
            href: ''
        }, {
            display: 'contact',
            href: ''
        }, {
            display: 'blog',
            href: ''
        }, {
            display: 'sign in',
            href: ''
        }];
        vm.menuCTA = {
            display: 'sign up free',
            href: ''
        };

        vm.contact = {
            name: 'Enter your name',
            email: 'email@address.com',
            message: 'What would you like to ask us?'
        }

    }
})();