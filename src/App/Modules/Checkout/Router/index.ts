export default [
    {
        path: '/checkout',
        component: () => import('../Views/Checkout.vue'),
        name: 'Checkout',
        meta: {
            requiresAuth: true,
            title: 'Cart',
        },
    },
    {
        path: '/place-order',
        component: () => import('../Views/PlaceOrder.vue'),
        name: 'PlaceOrder',
        meta: {
            requiresAuth: true,
            title: 'Cart',
        },
    }
];
