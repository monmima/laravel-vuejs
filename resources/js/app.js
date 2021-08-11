/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from "vue-router";
Vue.use(VueRouter);

// import Home from "./components/HomeComponent.vue";
// import Task from "./components/TaskComponent.vue";

// const routes = [
//     {
//         path: '/home',
//         component: Home
//     },
//     {
//         path: '/tasks',
//         component: Task
//     }
// ];

const Home = { template: `<h1>Contenuto Home</h1>` };
const About = { template: `<h1>Contenuto About</h1>` };
const Portfolio = { template: `<h1>Contenuto Portfolio</h1>` };
const Contatti = { template: `<h1>Contenuto Contatti</h1>` };
const Task = { template: `<h1>Contenuto Tasks</h1>` };

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/portfolio", component: Portfolio },
    { path: "/tasks", component: Task },
    { path: "/home", component: Home },
    { path: "/contatti", component: Contatti }
];

const router = new VueRouter({
    // mode: 'history', // to avoid hashtags in your routes
    routes: routes
})



// const router = new VueRouter({routes});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: router
});
