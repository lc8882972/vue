import Vue from 'vue'
import Router from 'vue-router'
/* ---- vue component ----- */
import Counter from '../components/counter.vue';
// import Func from '../components/func.vue';
// import secondcomponent from '../components/second.vue';
// import Parent from '../components/parent.vue';
import User from '../components/user.vue';
import Project from '../views/project.vue';
/* ---- vue component ----- */
Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  return { y: 0 }
}

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    // { path: '/second', name: 'second', component: secondcomponent },
    // { path: '/counter', name: 'counter', component: Counter },
    // { path: '/func', name: 'func', component: Func },
    // { path: '/parent', name: 'parent', component: Parent },
    { path: '/user', name: 'user', component: User },
    { path: '/project', name: 'project', component: Project },
    { path: '/', redirect: { name: 'project' } }
  ]
})