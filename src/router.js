import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectCard from './pages/ProjectCard.vue';
import SingleProjectCard from './pages/SingleProjectCard.vue';
import Contacts from './pages/Contacts.vue';

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
            path: '/show/:id',
            name: 'show',
            component: SingleProjectCard
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        }
    ]
});

export { router };