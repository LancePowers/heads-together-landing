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


    LandingController.$inject = ['$scope', 'parallaxHelper', '$interval', 'team', '$mdDialog', '$window'];

    function LandingController($scope, parallaxHelper, $interval, team, $mdDialog, $window) {
        var vm = this;
        vm.index = 0;
        vm.signUp = 'https://www.orderlyhealth.com/users/sign_up';
        vm.signIn = 'https://www.orderlyhealth.com/users/sign_in';
        vm.isPlaying = true;
        vm.isOpenMenu = false;
        vm.navItems = ['Simplified', 'Managed', 'Enhanced'];
        vm.background = parallaxHelper.createAnimator(-0.3, '200px', '100px');
        vm.pause = pause;
        vm.dialog = dialog;
        vm.teamMembers = team.teamMembers;
        vm.isScrolled = false;
        scrollMenu();
        vm.menuItems = [{
            display: 'about',
            href: '#about'
        }, {
            display: 'contact',
            href: '#contact'
        }, {
            display: 'blog',
            href: ''
        }, {
            display: 'sign in',
            href: 'https://www.orderlyhealth.com/users/sign_in'
        }];

        vm.scrollItems = [{
            index: 0,
            title: 'Managed.',
            text: 'With Orderly you can find out total spending on healthcare for you and your family in seconds. No more guessing at your deductible amount or account balance. Budget for future expenses, and watch the savings pile up.',
            color: {
                "color": "#44a7f0"
            },
            ctaColor: {
                "background-color": "#44a7f0"
            },
            image: "/landing/landing.img/orderly-mobile-dashboard.png"
        }, {
            index: 1,
            title: 'Simplified.',
            text: 'Healthcare is complicated. It doesn’t have to be. Sign up for Orderly for a summary view of all your claims, doctors, and medications in one place. We work hard to make this easy.',
            color: {
                "color": "#fb8e31"
            },
            ctaColor: {
                "background-color": "#fb8e31"
            },
            image: "/landing/landing.img/orderly-mobile-dashboard.png"
        }, {
            index: 2,
            title: 'Enhanced.',
            text: 'Receive alerts when you’re running out of time to use your FSA, reminding you to refill your prescriptions, or identifying opportunities to save money on products you buy regularly.',
            color: {
                "color": "#19a69b"
            },
            ctaColor: {
                "background-color": "#19a69b"
            },
            image: "/landing/landing.img/orderly-mobile-dashboard.png"
        }]



        vm.contact = {
            name: 'Enter your name',
            email: 'email@address.com',
            message: 'What would you like to ask us?'
        }

        vm.benefits = [{
            icon: '/landing/landing.img/create-account-icon.svg',
            name: 'Collect Your Data',
            //            text: ''
        }, {
            icon: '/landing/landing.img/collect-icon.svg',
            name: 'Explore Your Information',
            //            text: ''
        }, {
            icon: '/landing/landing.img/explore-icon.svg',
            name: 'Empower Your Decisions',
            //            text: ''
        }]

        vm.partners = ['/landing/landing.img/j-d-r-f-logo.svg', '/landing/landing.img/good-rx-logo.svg', '/landing/landing.img/b-v-s-d-logo.svg'];

        vm.contactInfo = [{
            value: 'Denver, CO',
            icon: '/landing/landing.img/location.svg'
        }, {
            value: '(720) 772 - 8310',
            icon: '/landing/landing.img/phone.svg'
        }, {
            value: 'info@orderlyhealth.com',
            icon: '/landing/landing.img/mail.svg'
        }, {
            value: '@orderlyhealth',
            icon: '/landing/landing.img/twitter.svg'
        }]

        $interval(play, 5000);

        function pause(title) {
            console.log(title)
            vm.isPlaying = false;
            vm.scrollItems.forEach(function (item) {
                console.log(item.title === title + '.')
                if (item.title === title + '.') {

                    vm.scrollItems.unshift(item);
                }
            })
        };

        function scrollMenu() {
            angular.element($window).bind("scroll", function () {
                if (this.pageYOffset >= 100) {
                    vm.isScrolled = true;
                    console.log(vm.isScrolled)
                } else {
                    vm.isScrolled = false;
                }
                $scope.$apply();
            });
        }

        function dialog(ev, title, content, ok) {
            console.log(content);
            console.log(vm.teamMembers);
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title(title)
                .textContent(content)
                .ariaLabel('Alert Dialog')
                .ok(ok)
                .targetEvent(ev)
            );
        };

        function play() {
            console.log(vm.isPlaying)
            if (vm.isPlaying) {
                var nextSlide = vm.scrollItems.shift();
                vm.scrollItems.push(nextSlide);
            }
        }

        vm.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac posuere elit. Mauris pharetra lacus nec nisi tincidunt tincidunt. Proin arcu risus, semper sed tempus ut, efficitur eu est. Suspendisse sed nisl arcu. Aliquam et urna eget tellus ultrices lobortis quis in ipsum. Morbi consequat orci tortor, quis auctor arcu."
    }

})();