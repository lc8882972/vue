<template>
  <div class="tabs" style="transform: translate3d(0,0,0)">
    <slot></slot>
  </div>
</template>
<script>
  import Factory from './tab.js';
  export default {
    data() {
      return {
        count: 0,
        items: [],
        tab: null
      }
    },
    methods: {

    },
    mounted() {
      var tabsElm = document.querySelector('.tabbody');
      this.count = tabsElm.getElementsByClassName('item').length;
      this.items = tabsElm.children;
      this.tab = Factory('.tabbody', {});
    }
  }
</script>
<style>
  .tabs {
    position: relative;
    width: 100%;
    height: 100%;
  }


  @keyframes mymove {
    from {
      transform: translate3d(0,0,0);
      background:red;
    }
    to {
      transform: translate3d(-750px,0,0);
      background:#fff;
    }
  }
</style>
