(function () {
	'use strict'
	angular.module('app')
		.factory('sendMail', sendMail);
	sendMail.$inject = ['$http','$mdDialog']
	function sendMail($http, $mdDialog) {

		var service = {};
		service.sendMail = sendMail;
		service.contact = {
			name: '',
			email: '',
			phone: '',
			message: ''
		};

		function sendMail(e) {
			e.preventDefault();
			var payload = {
				name: service.contact.name,
				email: service.contact.email,
				description: service.contact.message
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
		return service;
	}
})()
