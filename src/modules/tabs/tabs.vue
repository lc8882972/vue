<template>
  <div class="tabs" style="transform: translate3d(0,0,0)">
    <slot></slot>
  </div>
</template>
<script>
  import Item from './item.vue'
  import Factory from './tab.js';
  export default {
    components: {
      item: Item
    },
    data() {
      return {
        count: 0,
        items: [],
        tab:null
      }
    },
    methods: {

    },
    mounted() {
      var tabsElm = document.querySelector('.tabs');
      this.count = tabsElm.getElementsByClassName('item').length;
      this.items = tabsElm.children;
      this.tab =new Factory('.tabs');
    }
  }
</script>
<style>
  .tabs {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .tabs .item {
    /*flex: 0 1;*/
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }
</style>
