(function () {
    'use strict';
    angular.module('app.landing.menu')
        .directive('menu', [menuDirective]);

    function menuDirective() {
        return {
            restrict: 'E',
            templateUrl: 'landing/menu/menu.html',
            scope: {},
            link: linkFunction,
            controller: MenuController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    function linkFunction(scope, element, attrs, controller) {

    }


    MenuController.$inject = ['menu', '$window', '$scope'];

    function MenuController(menu, $window, $scope) {
        var vm = this;
        console.log(menu.header.full)
        vm.menuItems = menu.header.partial;
        vm.isSubMenu = isSubMenu;
        vm.scrollMenu = scrollMenu;
        vm.redirect = redirect;
        vm.headerClass = '';
        scrollMenu();

        function isSubMenu(val) {
            return Array.isArray(val)
        }

        function scrollMenu() {
            angular.element($window).bind("scroll", function () {
                if (this.pageYOffset >= 50) {
                    vm.isScrolled = true;
                    vm.menuItems = menu.header.full;
                } else {
                    vm.isScrolled = false;
                    vm.menuItems = menu.header.partial;
                }
                $scope.$apply();
            });
        }

        function redirect(val) {
            if (vm.isSubMenu(val)) {
                return false;
            } else {
                $window.location.href = val;
                return true;
            }
        }
    }
})();