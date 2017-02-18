import Vue from 'vue'
import Router from 'vue-router'
/* ---- vue component ----- */
import Counter from '../components/counter.vue';
import Func from '../components/func.vue';
import secondcomponent from '../components/second.vue';
import Parent from '../components/parent.vue';
/* ---- vue component ----- */
Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/second', name: 'second', component: secondcomponent },
        { path: '/counter', name: 'counter', component: Counter },
        { path: '/func', name: 'func', component: Func },
        { path: '/parent', name: 'parent', component: Parent },
        { path: '/', redirect: { name: 'counter' } }
    ]
})