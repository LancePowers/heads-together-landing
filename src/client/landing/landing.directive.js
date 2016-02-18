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


    LandingController.$inject = ['$scope', 'parallaxHelper', '$interval', 'team', '$mdDialog', '$window', 'landingContent', 'landingNav', '$http'];

    function LandingController($scope, parallaxHelper, $interval, team, $mdDialog, $window, landingContent, landingNav, $http) {
        var vm = this;
        analytics.track('Arrived on Page', {
            referrer: document.referrer
        })
        vm.index = 0;
        vm.signUp = 'https://welcome.orderlyhealth.com/users/sign_up';
        vm.signIn = 'https://welcome.orderlyhealth.com/users/sign_in';
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
        vm.alphaDialog = alphaDialog;
        scrollMenu();


        vm.contact = {
            name: '',
            email: '',
            message: ''
        }

        vm.partners = [{
            image: '/landing/landing.img/techstars-logo.svg',
            url: 'http://www.techstars.com/'
        }, {
            image: '/landing/landing.img/j-d-r-f-logo.svg',
            url: 'http://diabetesfoundation.jdrf.com/info/jdrf/'
        }, {
            image: '/landing/landing.img/good-rx-logo.png',
            url: 'http://www.goodrx.com/'
        }, {
            image: '/landing/landing.img/b-v-s-d-logo.svg',
            url: 'http://www.bvsd.k12.co.us/pages/home.aspx'
        }];

        vm.contactInfo = team.contactInfo;
        vm.sendMail = function () {
            var payload = {
                name: vm.contact.name,
                email: vm.contact.email,
                description: vm.contact.message
            };
            //        console.log(payload);
            $http.post('api/send-mail', payload)
                .then(function (response) {
                    var sendResponse = {
                        title: 'Error',
                        content: "There was a problem sending your message. Please verify that you have entered a valid email address.",
                    };
                    if (response.data.message = 'success')
                        var sendResponse = {
                            title: 'Success!',
                            content: "Your message has been sent successfully.",
                        }
                    $mdDialog.show(
                        $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title(sendResponse.title)
                        .textContent(sendResponse.content)
                        .ariaLabel('Alert Dialog')
                        .ok('ok')
                    );

                });
        };
        $interval(play, 7000);

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

        function alphaDialog(ev, buttonId) {
            analytics.track('Sign Up Click', {
                button: buttonId
            })
            $mdDialog.show({
                templateUrl: 'landing/signup-dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
        }

        function dialog(ev, title, content, ok) {
            console.log(ev);
            analytics.track('Read Bio', {
                name: title
            })
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
            return item + "." === vm.scrollItems[0].title;
        }

        vm.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac posuere elit. Mauris pharetra lacus nec nisi tincidunt tincidunt. Proin arcu risus, semper sed tempus ut, efficitur eu est. Suspendisse sed nisl arcu. Aliquam et urna eget tellus ultrices lobortis quis in ipsum. Morbi consequat orci tortor, quis auctor arcu."
    }

})();