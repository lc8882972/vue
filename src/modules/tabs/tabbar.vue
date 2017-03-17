<template>
  <div class="tabfooter">
    <slot></slot>
  </div>
</template>
<script>
  export default{

  }
</script>
<style>
  .tabfooter{
    display:flex;
    width: 100%;
    height:100px;
  }

  .tabfooter > *{
    flex: 1;
    height: 100;
    color:#000;
  }
</style>
