import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from "vue-router";
import moduleRoutes from '..//App/router'

let routes:Array<RouteRecordRaw> = moduleRoutes;

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 };
    }
});


export default router