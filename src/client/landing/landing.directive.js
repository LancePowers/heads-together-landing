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


    LandingController.$inject = ['$scope', 'parallaxHelper', '$interval', 'team', '$mdDialog', '$window', 'landingContent', 'landingNav'];

    function LandingController($scope, parallaxHelper, $interval, team, $mdDialog, $window, landingContent, landingNav) {
        var vm = this;
        vm.index = 0;
        vm.signUp = 'https://www.orderlyhealth.com/users/sign_up';
        vm.signIn = 'https://www.orderlyhealth.com/users/sign_in';
        vm.isPlaying = true;
        vm.isOpenMenu = false;
        vm.isScrolled = false;
        vm.isActive = isActive;
        vm.navItems = ['Simplified', 'Managed', 'Enhanced'];
        vm.background = parallaxHelper.createAnimator(-0.3, '200px', '100px');
        vm.pause = pause;
        vm.dialog = dialog;
        vm.teamMembers = team.teamMembers;
        vm.menuItems = landingNav.menuItems;
        vm.scrollItems = landingContent.scrollItems;
        vm.benefits = landingContent.benefits;
        scrollMenu();


        vm.contact = {
            name: 'Enter your name',
            email: 'email@address.com',
            message: 'What would you like to ask us?'
        }

        vm.partners = ['/landing/landing.img/j-d-r-f-logo.svg', '/landing/landing.img/good-rx-logo.svg', '/landing/landing.img/b-v-s-d-logo.svg'];

        vm.contactInfo = team.contactInfo;

        $interval(play, 5000);

        function pause(title) {
            console.log($window)
            vm.isPlaying = false;
            analytics.track('clicked slider', {
                title: title
            })
            vm.scrollItems.forEach(function (item) {
                console.log(item.title === title + '.')
                if (item.title === title + '.') {
                    vm.scrollItems.unshift(item);
                }
            })
        };

        function scrollMenu() {
            angular.element($window).bind("scroll", function () {
                if (this.pageYOffset >= 50) {
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

        function isActive(item) {
            console.log(item + "." === vm.scrollItems[0].title)
            return item + "." === vm.scrollItems[0].title;
        }

        vm.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac posuere elit. Mauris pharetra lacus nec nisi tincidunt tincidunt. Proin arcu risus, semper sed tempus ut, efficitur eu est. Suspendisse sed nisl arcu. Aliquam et urna eget tellus ultrices lobortis quis in ipsum. Morbi consequat orci tortor, quis auctor arcu."
    }

})();