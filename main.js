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

        infoNumbers : [
            {
                number : '1.916',
                text : 'finished sessions'
            },
            {
                number : '3.092+',
                text : 'enrolled learners'
            },
            {
                number : '200',
                text : 'online instructors'
            },
            {
                number : '100%',
                text : 'satisfaction rate'
            }
        ],

        services : {
            cards : [
                [
                    {
                        img : {
                            url : 'img/home-6-service-image-01.png',
                            positionTop : false
                        },
                        name : 'Graphic design',
                        description : 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.',
                        classes : [
                            'margin-top-30'
                        ],
                        icon : 'fas fa-tv'
                    },
                    {
                        img : {
                            url : 'img/home-6-service-image-03.png',
                            positionTop : true
                        },
                        name : 'Idea Discussion',
                        description : 'Get teamed up with the specialists who work and teach coding for years at famous universities.',
                        classes : [
                            'special'
                        ],
                        icon : 'far fa-flag'
                    }
                ],
                [
                    {
                        img : {
                            url : 'img/home-6-service-image-02.png',
                            positionTop : false
                        },
                        name : 'System Administration',
                        description : 'Learners are encouraged to study the mechanism and structure of system administration.',
                        classes : [
                            'margin-top-100'
                        ],
                        icon : 'far fa-life-ring'
                    },
                    {
                        img : {
                            url : 'img/home-6-service-image-04.png',
                            positionTop : true
                        },
                        name : 'Web Development',
                        description : 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.',
                        classes : [

                        ],
                        icon : 'fas fa-cog'
                    }
                ]
            ],

            listItems : [
                'Select & customize courses to your preferences',
                'Change the tutor and make arrangements',
                'Participate in events to join others',
                'Get the desired certificate delivered at house'
            ]
        },

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

        clientsLogos : [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06'
        ],

        articles : [
            {
                photo : 'img/artist-blog-03-480x325.jpeg',
                subject : 'artist',
                title : 'Brush Strokes Energize Trees in Paintings',
                date : 'May 15, 2020',
                views : 688
            },
            {
                photo : 'img/artist-blog-01-480x325.jpg',
                subject : 'artist',
                title : 'Pocked-Sized Notebooks Hold Miniature Paintings',
                date : 'May 15, 2020',
                views : 603
            },
            {
                photo : 'img/artist-blog-02-480x325.jpg',
                subject : 'artist',
                title : 'Connection Between Self-Portraits and Identity',
                date : 'May 15, 2020',
                views : 397
            }
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
        },

        // this function returns an array of objects representing services provided for the clients
        // these objects are taken from the array services.cards and displayed in the section with id "help"
        getServices() {
            let services = [...this.services.cards[0]];
            services.splice(1, 0, ...this.services.cards[1]);
            services.reverse();
            return services;
        },

        // this function takes as input the id of a client's logo and returns the path of the corresponding logo's image,
        // enabling us to display the client's logos in the section with id "clients"
        getLogoPath(logoId) {
            return "img/client-logo-colored-" + logoId + ".png";
        }
    }
});
