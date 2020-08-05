const routes = [
    //Admin Routes
    {
        path: '/login',
        component: require('@/components/layouts/Auth.vue').default,
        children: [
            {
                path     : 'admin',
                name     : 'admin-login',
                component: require('@/components/admin/AdminLogin.vue').default,
                meta     : {
                    guestOnly: true,
                    progress : {}
                }
            },
            {
                path     : 'staff',
                name     : 'staff-login',
                component: require('@/components/staff/StaffLogin.vue').default,
                meta     : {
                    guestOnly: true,
                    progress : {}
                }
            }
        ]
    },
    {
        ///////////////////////
        path     : '/admin',
        component: require('@/components/layouts/Main.vue').default,
        children : [
            {
                path     : '',
                name     : 'admin-home',
                component: require('@/components/admin/AdminHome.vue').default,
                meta     : {
                    authOnly: true,
                    progress: {}
                }
            },
            {
                path     : 'fakultas',
                name     : 'admin-fakultas',
                component: require('@/components/admin/Fakultas.vue').default,
                meta     : {
                    authOnly: true,
                    progress: {}
                }
            },
            {
                path     : 'staff',
                name     : 'admin-staff',
                component: require('@/components/admin/Staff.vue').default,
                meta     : {
                    authOnly: true,
                    progress: {}
                }
            },
            {
                path     : 'year',
                name     : 'admin-year',
                component: require('@/components/admin/Year.vue').default,
                meta     : {
                    authOnly: true,
                    progress: {}
                }
            },
            {
                path     : 'semester',
                name     : 'admin-semester',
                component: require('@/components/admin/Semester.vue').default,
                meta     : {
                    authOnly: true,
                    progress: {}
                }
            },
        ]
    },
    {
        path     : '/staff',
        component: require('@/components/layouts/Main.vue').default,
        children : [
            {
                path     : '',
                name     : 'staff-home',
                component: require('@/components/staff/StaffHome.vue').default,
                meta     : {
                    progress: {}
                }
            }
        ]
    }

]

export default routes
