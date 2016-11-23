import Vue from 'vue';
import VueRouter from "vue-router";
import Vuex from 'vuex'
import App from './App.vue';
import Counter from './Counter.vue';
import Func from './func.vue';
import secondcomponent from './Second.Component.vue';
import Parent from './Parent.vue';
import store from './store';
//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(Vuex);

const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' };
const User = {
  template: '<div>User {{$route.params.id}}</div>'
};
const Home = { template: '<div>This is Home</div>' };

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/first', name: 'first', component: First },
    { path: '/second', name: 'second', component: secondcomponent },
    { path: '/counter', name: 'counter', component: Counter },
    { path: '/user/:id', name: 'user', component: User },
    { path: '/func', name: 'func', component: Func },
    { path: '/parent', name: 'parent', component: Parent }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   next();
// })

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

app.$on('test', function (msg) {
  console.log(msg)
})

app.$emit('test', 'hi');

console.log(app);
