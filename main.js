var app = new Vue({
    el : '#root',

    data : {
        navMenu : [
            {
                title : 'Home',
                subMenu : [

                ]
            },
            {
                title : 'Pages',
                subMenu : [

                ]
            },
            {
                title : 'Courses',
                subMenu : [

                ]
            },
            {
                title : 'Features',
                subMenu : [

                ]
            },
            {
                title : 'Blog',
                subMenu : [

                ]
            },
            {
                title : 'Shop',
                subMenu : [

                ]
            }
        ],

        services : [
            'Select & customize courses to your preferences',
            'Change the tutor and make arrangements',
            'Participate in events to join others',
            'Get the desired certificate delivered at house'
        ],

        courses : [
            [
                {
                    img : 'img/course-02-480x298.jpg',
                    price : '$40.00',
                    name : 'Learning To Write As A Professional Author',
                    lessons : 20,
                    students : 50
                },
                {
                    img : 'img/stock-full-hd-03-480x298.jpg',
                    price : 'Free',
                    name : 'Customer-centric-Info-Tech Strategies',
                    lessons : 24,
                    students : 769
                }
            ],
            [
                {
                    img : 'img/stock-full-hd-04-480x298.jpg',
                    price : '$19.00',
                    name : 'Open Programming Courses for Everyone: Python',
                    lessons : 17,
                    students : 62
                },
                {
                    img : 'img/stock-full-hd-06-480x298.jpg',
                    price : '$26.00',
                    name : 'Academic Listening and Note-taking',
                    lessons : 14,
                    students : 67
                }
            ],
            [
                {
                    img : 'img/course-featured-image-01-480x298.jpg',
                    price : '$39.00',
                    name : 'Master JQuery in a Short Period of Time',
                    lessons : 61,
                    students : 51
                },
                {
                    img : 'img/stock-full-hd-05-480x298.jpg',
                    price : '$59.00',
                    name : 'Introduction to Javascript for Beginners',
                    lessons : 14,
                    students : 76
                }
            ]
        ],

        footerMenus : [
            {
                title : 'Explore',
                items : [
                    'Start here',
                    'Success story',
                    'Blog',
                    'Courses',
                    'About us',
                    'Contact us'
                ],
                classes : [
                    'd-flex',
                    'flex-wrap'
                ]
            },
            {
                title : 'Information',
                items : [
                    'Membership',
                    'Purchase guide',
                    'Privacy Policy',
                    'Terms of services'
                ],
                classes : [

                ]
            }
        ]
    },

    methods : {
        // this function calculates how many columns should be inserted in the right part of the footer
        // the number of columns depends on the number of elements contained in the array footerMenus
        colNumber() {
            return 'col-' + (12 / this.footerMenus.length);
        }
    }
});
