import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
    ]
})

export default routers