import{createRouter, createWebHistory} from 'vue-router';

import ConnexionApp from './ConnexionApp.vue'
import * as Vue from 'vue';
import Password from "./components/Password.vue";


const routes =[
    {
        path:'/password',
        component: Password
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = Vue.createApp(ConnexionApp);
app.use(router)
app.mount('#connexionapp');


