<template lang="html">
  <div id="app">
    <div class="pages">
    <default-header></default-header>
      <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
        <router-view class="view"></router-view>
      </transition>

    </div>
  </div>
</template>

<script>
  import Header from './components/header.vue';
  import Tabbar from './components/tabbar.vue';

  let isServer = process.env.VUE_ENV === 'server';
  console.log(process.env.VUE_ENV);
  if (!isServer) {
    require('../public/jroll');
    require("babel-polyfill");
  }
  export default {
    components: {
      'default-header': Header,
      'tabbar': Tabbar
    },
    data() {
      return {
        msg: 'hello'
      }
    },
    beforeMount() {

    },
    mounted() {
      var height = document.body.clientHeight - (lib.flexible.dpr * 100);
      var mainElm = document.querySelector('.main');
      mainElm.style.height = height + 'px';
      console.log('mounted => app.vue');
    },
  }
</script>

<style lang="sass">
  @import "./style/global.scss";
  @import "./style/layout.scss";

  .pages {
    width: 10rem;
    height: 100%;
  }
  [v-cloak] { display: none }
</style>
