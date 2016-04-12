(function () {
	'use strict';
	angular.module('app.landing.menu')
		.directive('menu', [menuDirective]);

	function menuDirective() {
		return {
			restrict: 'E',
			templateUrl: 'landing/menu/menu.html',
			scope: {alphaDialog:'&'},
			link: linkFunction,
			controller: MenuController,
			controllerAs: 'vm',
			bindToController: true
		}
	}


	function linkFunction(scope, element, attrs, controller) {

	}


	MenuController.$inject = ['menu', '$window', '$scope','sendMail'];

	function MenuController(menu, $window, $scope, sendMail) {
		var vm = this;
		console.log(vm.alphaDialog)
		vm.menuItems = menu.header.partial;
		vm.isSubMenu = isSubMenu;
		vm.scrollMenu = scrollMenu;
		vm.redirect = redirect;
		vm.headerClass = '';
		vm.isScrolled = false;
		vm.sendMail = sendMail.sendMail;
		vm.contact = sendMail.contact;
		scrollMenu();

		function isSubMenu(val) {
			return Array.isArray(val)
		}

		function scrollMenu() {
			angular.element($window).bind("scroll", function () {
				if (this.pageYOffset >= 100) {
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
		function sendMail(e) {
			e.preventDefault();
			var payload = {
				name: vm.contact.name,
				email: vm.contact.email,
				description: vm.contact.message
			};
					console.log(payload);
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
	}
})();
