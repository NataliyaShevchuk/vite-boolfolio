import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectCard from './pages/ProjectCard.vue';
import SingleProjectCard from './pages/SingleProjectCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/cards',
            name: 'index',
            component: ProjectCard
        },
        {
            path: '/show',
            name: 'show',
            component: SingleProjectCard
        },
    ]
});

export { router };