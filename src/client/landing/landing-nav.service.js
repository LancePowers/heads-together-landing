(function () {
    'use strict'
    angular.module('app')
        .factory('landingNav', landingNav);

    function landingNav() {
        var service = {};
        service.menuItems = [{
            display: 'about',
            href: '#about'
        }, {
            display: 'contact',
            href: '#contact'
        }, {
            display: 'blog',
            href: 'http://thisis.orderlyhealth.com/'
        }, {
            display: 'sign in',
            href: 'https://welcome.orderlytest.com/users/sign_in'
        }];

        return service;
    }
})()
