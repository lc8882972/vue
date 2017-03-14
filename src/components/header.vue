<template>
  <header class="header">
    <a class="btn-back" href="#">
      <i class="icon iconfont icon-fanhui"></i>
    </a>
    <span class="title">头部</span>
    <a class="btn-more" href="#">
      <i class="icon iconfont icon-gengduo"></i>
    </a>
  </header>
</template>
<script>
  export default {

  }

</script>
<style>
  .header {
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100px;/*px*/
    top: 0;
    z-index: 99;    
  }
  
  .header::before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;/*no*/
    background: #000;
    transform: scale3d(1, .5, 1);
  }
  
  .btn-back {
    position: relative;
    left: 32px;
  }
  
  .btn-more {
    position: relative;
    right: 32px;
  }

  .title{
    flex: 1;
    text-align: center;
    font-size:36px; 
    line-height: 1;
  }
</style>