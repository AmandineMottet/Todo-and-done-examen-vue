import{createRouter, createWebHistory} from 'vue-router';

import Mine from './components/Mine.vue';
import Family from './components/Family.vue';
import Work from './components/Work.vue';

import App from './App.vue'
import * as Vue from 'vue';

const routes =[
    {
        path:'/mine',
        component: Mine
    },
    {
        path:'/family',
        component: Family
    },
    {
        path:'/work',
        component: Work
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');


