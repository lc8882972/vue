<template>
  <div id="wrapper">
    <div id="scroller">
    <slot></slot>
    </div>
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
            self.pullup();
        }
      });

      if (typeof (self.pullup) === 'function'){
        self.pullup();
      }
    },
    activated() {
      console.log('activated');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated () {
      this.jroll.refresh();
      console.log('updated => infinite.vue');
    }
  
}
</script>