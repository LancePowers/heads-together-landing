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


    LandingController.$inject = ['parallaxHelper', '$interval'];

    function LandingController(parallaxHelper, $interval) {
        var vm = this;
        vm.index = 0;
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

        vm.scrollItems = [{
            index: 0,
            title: 'Managed.',
            text: 'With Orderly you can find out total spending on healthcare for you and your family in seconds. No more guessing at your deductible amount or account balance. Budget for future expenses, and watch the savings pile up.',
            color: {
                "color": "#44a7f0"
            },
            ctaColor: {
                "background-color": "#44a7f0"
            }
        }, {
            index: 1,
            title: 'Simplified.',
            text: 'Healthcare is complicated. It doesn’t have to be. Sign up for Orderly for a summary view of all your claims, doctors, and medications in one place. We work hard to make this easy.',
            color: {
                "color": "#fb8e31"
            },
            ctaColor: {
                "background-color": "#fb8e31"
            }
        }, {
            index: 2,
            title: 'Enhanced.',
            text: 'Receive alerts when you’re running out of time to use your FSA, reminding you to refill your prescriptions, or identifying opportunities to save money on products you buy regularly.',
            color: {
                "color": "#19a69b"
            },
            ctaColor: {
                "background-color": "#19a69b"
            }
        }]

        vm.background = parallaxHelper.createAnimator(-0.3);

        vm.contact = {
            name: 'Enter your name',
            email: 'email@address.com',
            message: 'What would you like to ask us?'
        }
        $interval(changeDisplay, 3000);

        function changeDisplay() {
            var nextSlide = vm.scrollItems.shift();
            vm.scrollItems.push(nextSlide);
            console.log(vm.scrollItems)
        }
    }

})();