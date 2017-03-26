<template>
  <div class="tabbody">
    <slot></slot>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="sass">
  .tabbody {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .tabbody .item{
    /*flex: 0 1;*/
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }
</style>
