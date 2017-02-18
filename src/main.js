import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './components/app.vue';
import store from './store';
import router from './router';
import * as filters from './filters'
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   next();
// })

sync(store, router);

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  store,
  router,
  ...App
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }

