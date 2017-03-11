<template>
  <div class="container">
    <header class="header">
        <a class="btn-back" href="#">
          <i class="icon iconfont icon-fanhui">
        </a>
        <span class="title">头部</span>
        <a class="btn-more" href="#">
          <i class="icon iconfont icon-gengduo">
        </a>
    </header>
    <div class="main">
      <div id="wrapper">
        <ul id="scroller" jroll-id="jroll">
          <li v-for='item in list'>{{item}}</li>
          <li>有一美人兮，见之不忘。</li>
          <li>一日不见兮，思之如狂。</li>
          <li>凤飞翱翔兮，四海求凰。</li>
          <li>无奈佳人兮，不在东墙。</li>
          <li>将琴代语兮，聊写衷肠。</li>
          <li>何日见许兮，慰我彷徨。</li>
          <li>愿言配德兮，携手相将。</li>
          <li>不得於飞兮，使我沦亡。</li>
          <li>有一美人兮，见之不忘。</li>
          <li>一日不见兮，思之如狂。</li>
          <li>凤飞翱翔兮，四海求凰。</li>
          <li>无奈佳人兮，不在东墙。</li>
          <li>将琴代语兮，聊写衷肠。</li>
          <li>何日见许兮，慰我彷徨。</li>
          <li>愿言配德兮，携手相将。</li>
          <li>不得於飞兮，使我沦亡。</li>
        </ul>
      </div>
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
  <div>
</template>

<script>


export default {
  data(){
    return {
      list:[
        '有一美人兮，见之不忘。',
        '凤飞翱翔兮，四海求凰。',
        '无奈佳人兮，不在东墙。',
        '将琴代语兮，聊写衷肠。',
        '何日见许兮，慰我彷徨。',
        '愿言配德兮，携手相将。',
        '不得於飞兮，使我沦亡。'
      ]
    }
  },
  methods:{

  },
  components:{
    'jroll-infinite': JRoll.VueInfinite({})
  },
  beforeMount(){

  },
  mounted(){
    console.log('mounted');

    let wrapper =document.querySelector('#wrapper');
    let jroll = new JRoll(wrapper,{
      id:'jroll',
      scrollY:true
    });
    var _this =this;
    jroll.on("scroll", function() {
      if(this.y / this.maxScrollY <0.8 ) return;

      _this.list.push('有一美人兮，见之不忘。');
      _this.list.push('凤飞翱翔兮，四海求凰。');
      _this.list.push('无奈佳人兮，不在东墙。');
      _this.list.push('将琴代语兮，聊写衷肠。');
      _this.list.push('何日见许兮，慰我彷徨。');
      _this.list.push('愿言配德兮，携手相将。');
      _this.list.push('不得於飞兮，使我沦亡。');
      this.refresh();
    });
    setTimeout(function() {
      jroll.refresh();
    }, 100);
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  activated(){
    console.log('activated');
  },
  updated(){

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
    position: absolute;
    left: 32px;
  }

  .btn-more{
    position: absolute;
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
