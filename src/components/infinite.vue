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
    },
    beforeMount(){
        require('jroll');
    },
     mounted () {
      var self = this;
      self.jroll = new JRoll(self.$el, {scrollBarY: true,y:-200});
      
      self.jroll.on('scrollEnd', function () {
        if (
          this.y < (this.maxScrollY + self.jroll.scroller.querySelector('.jroll-infinite-tip').offsetHeight) &&
          this.scrollerHeight > this.wrapperHeight && 
          typeof self.pullup === 'function') {
            self.pullup.call(this);
        }
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
