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
