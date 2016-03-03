(function () {
    'use strict'
    angular.module('app')
        .factory('menu', menu);
    /*  
    // *** Menu Service *** // 
    Menu components are defined at the beginning of the service. 
    Components are combined as an array of menu items below.  
    */

    function menu() {
        var service = {};

        var signIn = {
            title: 'Sign In',
            value: 'https://welcome.orderlyhealth.com/users/sign_in'
        };
        var signUp = {
            title: 'Sign Up',
            value: 'https://welcome.orderlyhealth.com/users/sign_up'
        };
        var blog = {
            title: 'Blog',
            value: 'http://thisis.orderlyhealth.com/'
        };
        var press = {
            title: 'Press',
            value: [{
                title: 'Techstars Blog',
                value: 'http://www.techstars.com/content/blog/announcing-the-2016-techstars-boulder-class/'
        }, {
                title: 'Cybermed News',
                value: 'http://cybermednews.com/2016/02/orderly-health-accepted-into-techstars-2016-boulder-accelerator/'
        }, {
                title: 'BusinessDen',
                value: 'http://www.businessden.com/2016/02/19/techstars-accepts-5-denver-startups-for-three-month-tutorial/'
        }]
        };
        var about = {
            title: 'About',
            value: '#about'
        };
        var contact = {
            title: 'contact',
            value: '#contact'
        };
        var terms = {
            title: 'Terms of Service',
            value: "https://www.welcome.orderlyhealth.com/legal"
        };
        var policy = {
            title: 'Privacy Policy',
            value: "https://www.welcome.orderlyhealth.com/privacy"
        };

        service.header = {
            full: [about, contact, press, blog, signIn, signUp],
            partial: [about, contact, press, blog, signIn]
        };
        service.footer = [signIn, terms, policy];


        return service;
    }
})()