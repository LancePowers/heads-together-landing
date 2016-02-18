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
        },  {
            display: 'sign in',
            href: 'https://welcome.orderlyhealth.com/users/sign_in'
        }];
//        {
    //            display: 'blog',
    //            href: ''
    //        },
        return service;
    }
})()