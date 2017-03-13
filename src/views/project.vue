<template>
  <div class="container">
    <header class="header">
        <a class="btn-back" href="#">
          <i class="icon iconfont icon-fanhui"></i>
        </a>
        <span class="title">头部</span>
        <a class="btn-more" href="#">
          <i class="icon iconfont icon-gengduo"></i>
        </a>
    </header>
    <div class="main">
      <keep-alive>
        <jroll-infinite v-bind:data="list" v-bind:pullup="pullup">
          <li v-for="item in list" >{{item}}</li>
        </jroll-infinite>
      </keep-alive>
    </div>
    <footer class="footer row">
    
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
    </footer>
  </div>
</template>

<script>

import Infinite from '../components/infinite.vue'

export default {
    data() {
      return {
        // list:['有一美人兮，见之不忘。', '凤飞翱翔兮，四海求凰。', '无奈佳人兮，不在东墙。', '将琴代语兮，聊写衷肠。', '何日见许兮，慰我彷徨。', '愿言配德兮，携手相将。', '不得於飞兮，使我沦亡。']
      }
    },
    computed: {
      list () {
        return this.$store.state.list
      }
    },
    components: {
      'jroll-infinite': Infinite
    },
    methods: {
      
      pullup(){
        let self =this;
        setTimeout(()=>{
          var list =[];
          list.push('有一美人兮，见之不忘。');
          list.push('凤飞翱翔兮，四海求凰。');
          list.push('无奈佳人兮，不在东墙。');
          list.push('将琴代语兮，聊写衷肠。');
          list.push('何日见许兮，慰我彷徨。');
          list.push('愿言配德兮，携手相将。');
          list.push('不得於飞兮，使我沦亡。');
          list.push('有一美人兮，见之不忘。');
          list.push('凤飞翱翔兮，四海求凰。');
          list.push('无奈佳人兮，不在东墙。');
          list.push('将琴代语兮，聊写衷肠。');
          list.push('何日见许兮，慰我彷徨。');
          list.push('愿言配德兮，携手相将。');
          list.push('不得於飞兮，使我沦亡。');
          list.push('有一美人兮，见之不忘。');

          self.$store.dispatch('rest', list);
        },200)
      }
    },
    beforeMount() {
      // console.log(Infinite);
    },
    mounted() {
      console.log('project.vue');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    activated() {
      console.log('activated');
    },
    updated() {

    }
  }
</script>
<style>
  html,body{
    width: 100%;
    height: 100%;
    
  }

  .icon{
    font-size:48px;
    color: #333;      
  }

  .title{
    flex: 1;
    text-align: center;
    font-size:36px; 
    line-height: 1;
  }
  .container{
    width: 100%;
    height: 100%;
    overflow: hidden;    
  }

  .header{
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100px;/*px*/    
  }

  .header::before{
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px; /*no*/
    background: #000;
    transform: scale3d(1,.5,1);
  }

  .btn-back{
    position: relative;
    left: 32px;
  }

  .btn-more{
    position: relative;
    right: 32px;
  }
  .main{
    width: 100%;
    height: 85%;    
  }

  ul {
    margin: 0; 
    padding: 0;
    font-size:28px;/*px*/ 
  }
  li {
    line-height: 48px;
    margin-left: 48px;
    text-align: center;
  }
  #wrapper {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden; 
  }

  .footer{
    position: relative;
    width: 100%;
    height: 100px;/*px*/
    justify-content: center;
    align-items: center;
  }

  .footer::before{
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px; /*no*/
    background: #000;
    transform: scale3d(1,.5,1);
  }

  .row{
    display: flex;
  }

  .item{
    flex: 1;
    text-align: center;
    color: #333;
  }

  .item > *{
    display: block;
    margin: 0;
    padding: 0;
    
  }

  .small{
    font-size: 24px; /*px*/
  }
</style>
