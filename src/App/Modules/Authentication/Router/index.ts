export default [
    {
        path: '/login',
        component: () => import('../Views/Login.vue'),
        name: 'Login',
        meta: {
            requiresAuth: false,
            onmenu: false,
            title: 'Home',
            icon: '',
        },
    },
    {
        path: '/register',
        component: () => import('../Views/Register.vue'),
        name: 'Register',
        meta: {
            requiresAuth: false,
            onmenu: false,
            title: 'Register',
            icon: '',
        },
    }
];
