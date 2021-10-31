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
    }
];
