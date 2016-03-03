(function () {
    'use strict';
    angular.module('app.landing.messaging')
        .directive('messaging', [messagingDirective]);

    function messagingDirective() {
        return {
            restrict: 'E',
            templateUrl: 'landing/messaging/messaging.html',
            scope: {},
            link: linkFunction,
            controller: MessagingController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    function linkFunction(scope, element, attrs, controller) {

    }


    MessagingController.$inject = [];

    function MessagingController() {
        var vm = this;


    }
})();