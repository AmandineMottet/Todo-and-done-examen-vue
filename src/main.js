import{createRouter, createWebHistory} from 'vue-router';


import Mine from './components/Mine.vue';
import Family from './components/Family.vue';
import Work from './components/Work.vue';
import Account from "./components/Account.vue";
import Accueil from "./components/Accueil.vue";

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
    {
        path:'/account',
        component: Account
    },
    {
        path:'/',
        component: Accueil
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');


