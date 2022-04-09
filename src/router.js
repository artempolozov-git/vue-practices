import { createRouter, createWebHistory} from "vue-router";
import appHeader from './layouts/app-header';
import appFooter from './layouts/app-footer';

const routes = [
    {
        path: '/',
        name: 'app-home',
        components: {
            header: appHeader,
            footer: appFooter,
            //aside: Aside,
            default: () => import('@/views/app-home.vue')
        },
        meta: {
            title: 'Практика Vue.js',
            description: ''
        },
        children: [],
    },
    {
        path: '/vuex',
        name: 'v-vuex',
        components: {
            header: appHeader,
            footer: appFooter,
            //aside: Aside,
            default: () => import('@/components/v-vuex.vue')
        },
        meta: {
            title: 'Практика Vuex',
            description: ''
        },
        children: [],
    },
    {
        path: '/axios',
        name: 'v-axios',
        components: {
            header: appHeader,
            footer: appFooter,
            //aside: Aside,
            default: () => import('@/components/v-axios.vue')
        },
        meta: {
            title: 'Практика запросов axios',
            description: ''
        },
        children: [],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});

export default router;