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
            image: "/landing/landing.img/mobile-dashboard.png"
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
            image: "/landing/landing.img/mobile-financials.png"
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
            image: "/landing/landing.img/mobile-dashboard.png"
        }];

        service.benefits = [{
            icon: '/landing/landing.img/create-account-icon.svg',
            name: 'Gather Your Data',
            text: 'Start by providing us with some basic information about you, like your name and insurance information. From there, let us do all the hard work of gathering, cleaning, and organizing your data for you. You only have to go through this process once, and we’ll do the rest. You are in complete control over what data we collect on your behalf, and no one will ever see your data except you.'
        }, {
            icon: '/landing/landing.img/collect-icon.svg',
            name: 'Explore Your Information',
            text: 'Once you’re data has loaded into the dashboard, you can begin to explore your healthcare spending like you never have before. See all your claims laid out in one place and ask questions about specific transactions. Know exactly how much is left on your deductible and where those dollars went. Get a clear picture of all the physicians you’ve seen and why. With Orderly, you can finally begin to understand the costs of healthcare.'
        }, {
            icon: '/landing/landing.img/explore-icon.svg',
            name: 'Empower Your Decisions',
            text: 'With a complete picture of your healthcare spending you never have to remember whether you submitted a claim for reimbursement or whether you forgot to use money left in your FSA. Orderly will alert you automatically to opportunities to save money or get back money you’ve already spent. The more you use Orderly, the better it gets.'
        }];

        return service;
    }
})()