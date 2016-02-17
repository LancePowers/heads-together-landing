(function () {
    'use strict'
    angular.module('app')
        .factory('landingContent', landingContent);

    function landingContent() {

        var service = {};

        service.scrollItems = [{
            index: 0,
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
            index: 1,
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
        }];

        service.benefits = [{
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
        }];

        return service;
    }
})()