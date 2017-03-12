<template>
  <div id="wrapper">
    <ul id="scroller">
      <slot></slot><li class="jroll-infinite-tip" v-html="tip"></li>
    </ul>
  </div>
</template>

<script>
  export default {

    data: function () {
      return {
        page: 0,
        tip: '正在加载中...'
      }
    },
    props: {
      data: Array,
      pulldown:Function,
      pullup:Function
    },
    methods:{
      // bottoselfd() {
      //   let self = this;
      //   setTiselfout(function() {
      //       self.list.push('有一美人兮，见之不忘。');
      //       self.list.push('凤飞翱翔兮，四海求凰。');
      //       self.list.push('无奈佳人兮，不在东墙。');
      //       self.list.push('将琴代语兮，聊写衷肠。');
      //       self.list.push('何日见许兮，慰我彷徨。');
      //       self.list.push('愿言配德兮，携手相将。');
      //       self.list.push('不得於飞兮，使我沦亡。');
      //   },200);
      // }
    },
    beforeMount(){
        require('jroll');
    },
     mounted () {
      var self = this;
      self.jroll = new JRoll(self.$el, {scrollBarY: true});

      self.jroll.on('scrollEnd', function () {
        if (
          this.y < (this.maxScrollY + self.jroll.scroller.querySelector('.jroll-infinite-tip').offsetHeight) &&
          this.scrollerHeight > this.wrapperHeight && 
          typeof self.pullup === 'function') {
            self.pullup.call(this);
        }
        console.log(this.y);
        console.log(this.maxScrollY);
        console.log(self.jroll.scroller.querySelector('.jroll-infinite-tip').offsetHeight);
        console.log(this.maxScrollY + self.jroll.scroller.querySelector('.jroll-infinite-tip').offsetHeight);
        console.log(this.scrollerHeight);
        console.log(this.wrapperHeight);
      });

      if (typeof (self.pullup) === 'function'){
        self.pullup.call(this);
      }
    },
    updated () {
      // if (options && typeof options.updated === 'function')
      //   options.updated.call(this);
      this.jroll.refresh();
    }
  
}
</script>

<style>
</style>
