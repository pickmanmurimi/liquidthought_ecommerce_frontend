export default [
    {
        path: '/',
        component: () => import('../Views/Home.vue'),
        name: 'Home',
        meta: {
            requiresAuth: false,
            onmenu: false,
            title: 'Home',
            icon: 'NewspaperIcon',
        },
    }
];
