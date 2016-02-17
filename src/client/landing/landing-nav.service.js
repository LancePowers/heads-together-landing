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
            href: ''
        }, {
            display: 'sign in',
            href: 'https://www.orderlyhealth.com/users/sign_in'
        }];
        return service;
    }
})()