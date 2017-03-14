<template>
  <div class="container">
    <default-header></default-header>
    <div class="main">
      <keep-alive>
        <jroll-infinite v-bind:pullup="pullup">
          <ul>
            <li v-for="item in list">{{item}}</li>
            <li class="jroll-infinite-tip">正在加载中......</li>
          </ul>
        </jroll-infinite>
      </keep-alive>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Infinite from '../components/infinite.vue';
  import Header from '../components/header.vue';
  import Tabbar from '../components/tabbar.vue';

  export default {
    data() {
      return {
        // list:['有一美人兮，见之不忘。', '凤飞翱翔兮，四海求凰。', '无奈佳人兮，不在东墙。', '将琴代语兮，聊写衷肠。', '何日见许兮，慰我彷徨。', '愿言配德兮，携手相将。', '不得於飞兮，使我沦亡。']
      }
    },
    computed: {
      list() {
        return this.$store.state.list
      }
    },
    components: {
      'jroll-infinite': Infinite,
      'default-header': Header,
      'tabbar': Tabbar
    },
    methods: {

      pullup() {
        let self = this;
        setTimeout(() => {
          var list = [];
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
        }, 200)
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
      console.log('updated => project.vue');
    }
  }

</script>
<style>
  ul {
    margin: 0;
    padding: 0;
    font-size: 28px;
    /*px*/
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
</style>