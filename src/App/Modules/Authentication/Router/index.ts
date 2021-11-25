export default [
    {
        path: '/login',
        component: () => import('../Views/Login.vue'),
        name: 'Login',
        meta: {
            requiresAuth: false,
            strictNoAuth: true,
            title: 'Home',
        },
    },
    {
        path: '/register',
        component: () => import('../Views/Register.vue'),
        name: 'Register',
        meta: {
            requiresAuth: false,
            strictNoAuth: true,
            title: 'Register',
        },
    },
    {
        path: '/confirm-email/:token/:uuid',
        component: () => import('../Views/ConfirmEmail.vue'),
        name: 'ConfirmEmail',
        meta: {
            requiresAuth: false,
            strictNoAuth: false,
            title: 'ConfirmEmail',
        },
    }
];
