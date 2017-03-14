<template>
  <div class="tabbar">
    <router-link :to="{ name: 'user'}" class="item">
      <i class="icon iconfont icon-zhaoxiangji"></i>
      <span class="small">照相机</span>
    </router-link>
    <a class="item" href="">
      <i class="icon iconfont icon-zhaoxiangji"></i>
      <span class="small">照相机</span>
    </a>
    <a class="item" href="">
      <i class="icon iconfont icon-zhaoxiangji"></i>
      <span class="small">照相机</span>
    </a>
    <a class="item" href="">
      <i class="icon iconfont icon-zhaoxiangji"></i>
      <span class="small">照相机</span>
    </a>
  </div>
</template>
<script>
  export default {

  }

</script>
<style>
  .tabbar {
    position: fixed;
    display: flex;
    z-index: 99;
    bottom: 0;
    width: 100%;
    height: 100px;/*px*/
    justify-content: center;
    align-items: center;
  }

  .tabbar::before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;/*no*/
    background: #000;
    transform: scale3d(1, .5, 1);
  }

  .tabbar .item{
    flex: 1;
    text-align: center;
    color: #333;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .tabbar .item > * {
    display: block;
  }
</style>