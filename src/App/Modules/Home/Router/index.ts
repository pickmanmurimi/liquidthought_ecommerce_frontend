export default [
    {
        path: '/',
        component: () => import('../Views/Home.vue'),
        name: 'Home',
        meta: {
            requiresAuth: false,
            title: 'Home',
        },
    },
    {
        path: '/product/:uuid',
        component: () => import('../Views/ViewProduct.vue'),
        name: 'ViewProduct',
        meta: {
            requiresAuth: false,
            title: 'ViewProduct',
        },
    },
    {
        path: '/cart',
        component: () => import('../Views/Cart.vue'),
        name: 'Cart',
        meta: {
            requiresAuth: false,
            title: 'Cart',
        },
    },
];
