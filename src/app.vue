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
  import Header from './components/header.vue'
  import Tabbar from './components/tabbar.vue'
  import Logger from './scripts/log.js'
  let isServer = process.env.VUE_ENV === 'server'

  if (!isServer) {
    require('../public/jroll');
    require("babel-polyfill");
  }

  Logger.log(isServer);
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
      Logger.log('mounted => app.vue');
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
