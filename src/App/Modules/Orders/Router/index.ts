export default [
    {
        path: '/my-orders',
        component: () => import('../Views/Orders.vue'),
        name: 'Orders',
        meta: {
            requiresAuth: true,
            title: 'My Orders',
        },
    },
];
