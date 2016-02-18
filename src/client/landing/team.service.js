(function () {
    'use strict'
    angular.module('app')
        .factory('team', team);

    function team() {
        var service = {};

        service.contactInfo = [{
            value: 'Denver, CO',
            icon: '/landing/landing.img/location.svg'
        }, {
            value: '(720) 772 - 8310',
            icon: '/landing/landing.img/phone.svg'
        }, {
            value: 'info@orderlyhealth.com',
            icon: '/landing/landing.img/mail.svg'
        }, {
            value: '@orderlyhealth',
            icon: '/landing/landing.img/twitter.svg'
        }];

        service.teamMembers = [{
            name: 'Kevin Krauth',
            image: '/landing/landing.img/Kevin_Krauth.jpg',
            title: 'co-founder / ceo',
            bio: "Kevin left his role as the Senior Product Manager for Electronic Arts' digital platform team to help found Orderly. Prior to EA, Kevin was working as a Product Manager at a mobile analytics startup called Upsight in San Francisco. His clients included Glu Mobile, Tinder, JackThreads, and Kaiser Permanente. Kevin can trace the roots of his interest in healthcare back to early childhood memories making rounds with his dad, at the time a physician in Denver. Originally enrolled in the “PreMed” program at Duke, Kevin shifted his focus to the business of healthcare, choosing instead to study healthcare policy as a Public Policy  / Economics major. When he’s not in the office you can find Kevin skiing, rock climbing, or running, usually while listening to podcasts on healthcare and technology and preferably in the mountains of Colorado."
        }, {
            name: 'James Dickhoner MD',
            image: '/landing/landing.img/James_Dickhoner.jpg',
            title: 'co-founder',
            bio: 'His primary responsibilities at Orderly include managing the day to day operations, overseeing development and working with healthcare data. He also works closely with Kevin to assist in fundraising and business development. Prior to Orderly, James completed medical school where he worked as a researcher in the departments of medical informatics and emergency medicine at Cincinnati Children’s Hospital. Additionally, he completed the Stanford Ignite program at the Graduate School of Business in the summer of 2015. In his previous life, he worked as a ski patroller in Tahoe. Besides obsessively thinking about how to access healthcare, he spends his free time fly fishing, skiing, and working his way through "The Art of French Cooking".'
        }, {
            name: 'Paul Lungu',
            image: '/landing/landing.img/Paul_Lungu.jpg',
            title: 'co-founder / technical lead',
            bio: 'Prior to joining Orderly, Paul was working on side project to create a cloud hosted peer to peer medical records and claims management system. He has 10+ years of experience building and supporting consumer facing applications for companies like Alfresco, the NBA, and the City and County of Denver. In his spare time Paul is restoring a VW bus, a proud father of two rambunctious kids and a regularly drops in for some old timer hockey.'
        }, {
            name: 'Lance Powers',
            image: '/landing/landing.img/Lance_Powers.jpg',
            title: 'Software Engineer',
            bio: 'A recent graduate of Galvanize’s full stack development program, Lance was motivated to join the Orderly team by his previous experiences with the mental health care system, both personally and as an advocate for others.  With an educational background in finance, he founded an energy efficient lighting company that would go on to employ 30+ individuals. It generated approximately $5 million in revenue, more than 1,000 completed installations, and a net carbon effect equivalent to planting 400,000 new trees. He left to take a position as marketing director for the Boulder startup, hobbyDB. Working closely with the development team there he discovered his inner-nerd and decided to become a developer. Outside of coding, Lance enjoys candy making, the piano, snowboarding, photography, cycling, and is working to complete a children’s novel for his nephew. '
        }]
        return service;
    }
})()