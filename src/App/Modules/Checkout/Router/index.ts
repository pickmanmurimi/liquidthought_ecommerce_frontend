export default [
    {
        path: '/checkout',
        component: () => import('../Views/Checkout.vue'),
        name: 'Checkout',
        meta: {
            requiresAuth: true,
            title: 'Cart',
        },
    }
];
