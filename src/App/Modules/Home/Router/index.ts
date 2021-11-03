export default [
    {
        path: '/',
        component: () => import('../Views/Home.vue'),
        name: 'Home',
        meta: {
            requiresAuth: false,
            onmenu: false,
            title: 'Home',
        },
    },
    {
        path: '/product/:uuid',
        component: () => import('../Views/ViewProduct.vue'),
        name: 'ViewProduct',
        meta: {
            requiresAuth: false,
            onmenu: false,
            title: 'ViewProduct',
        },
    },
    {
        path: '/cart',
        component: () => import('../Views/Cart.vue'),
        name: 'Cart',
        meta: {
            requiresAuth: false,
            onmenu: false,
            title: 'Cart',
        },
    }
];
