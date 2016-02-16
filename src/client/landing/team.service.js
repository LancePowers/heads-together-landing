(function () {
    'use strict'
    angular.module('app')
        .factory('team', team);

    function team() {
        var service = {};
        service.teamMembers = [{
            name: 'Kevin Krauth',
            image: '/landing/landing.img/Kevin_Krauth.jpg',
            title: 'co-founder / ceo',
            bio: "Kevin left his role as the Senior Product Manager for Electronic Arts' digital platform team to help found Orderly. Prior to EA, Kevin was working as a Product Manager at a mobile analytics startup called Upsight in San Francisco. His clients included Glu Mobile, Tinder, JackThreads, and Kaiser Permanente. His interest in healthcare dates back to early childhood memories making rounds with his dad, at the time a physician in Denver. Originally enrolled in the “PreMed” program at Duke, Kevin shifted his focus to the business of healthcare, choosing to focus instead on healthcare policy as a Public Policy  / Economics major. When he’s not in the office you can find Kevin skiing, rock climbing, running, usually while listening to podcasts on healthcare and technology, preferably in the mountains of Colorado."
        }, {
            name: 'James Dickhoner',
            image: '/landing/landing.img/James_Dickhoner.jpg',
            title: 'co-founder / MD',
            bio: ''
        }, {
            name: 'Paul Lungu',
            image: '/landing/landing.img/Paul_Lungu.jpg',
            title: 'CTO',
            bio: ''
        }, {
            name: 'Lance Powers',
            image: '/landing/landing.img/Lance_Powers.jpg',
            title: 'Software Engineer',
            bio: ''
        }]
        return service;
    }
})()