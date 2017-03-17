export default function(el, option) {

  var $el = (typeof(el) === 'string') ? document.querySelector(el) : el;

  var config = {
    index: 0,
    x: 0
  }

  var start = 0,
    end = 0,
    moved = 0,
    clientX = $el.clientWidth,
    timestamp = 0,
    regex = /\.*translate3d\((.*)\)/i,
    len = $el.children.length,
    maxX = 0,
    minX = -((len - 1) * clientX);

  var util = {

    matchPoint(str) {
      let reg = /\.*translate3d\((.*)\)/i;

      if (str == '' || str == null)
        return null;
      var temp = reg.exec(str)[1];
      var array = temp.split(',');
      for (var i = 0; i < array.length; i++) {
        array[i] = array[i].replace('px', '');
      }
      return { x: parseInt(array[0]), y: parseInt(array[1]), z: parseInt(array[2]) };
    },

    getTransform(el) {
      var tran = el.style.transform || el.style.webkitTransform;
      return tran
    },
    setTransform(el, val) {
      var temp = 'translate3d(' + val + 'px,0px,0px)';
      var tran = this.$el.style.transform || this.$el.style.webkitTransform;
      tran = temp;
      return tran
    }

  }

  class TabComponent {
    constructor(el, option) {
      this.$el = el;
      this.index = 0;
      this.items = this.$el.children;
      this.len = this.items.length;
      this.footer = document.getElementsByClassName('tabfooter')[0];
      console.log(this.footer);
    }

    get transform() {
      var tran = typeof(this.$el.style.transform) !== 'undefined' ? this.$el.style.transform : this.$el.style.webkitTransform;
      return tran
    }

    set transform(val) {
      typeof(this.$el.style.transform) !== 'undefined' ? this.$el.style.transform = val: this.$el.style.webkitTransform = val;
    }

    get transition() {
      var tran = typeof(this.$el.style.transition) !== 'undefined' ? this.$el.style.transition : this.$el.style.webkitTransition;
      return tran
    }

    set transition(val) {

      typeof(this.$el.style.transition) !== 'undefined' ? this.$el.style.transition = val: this.$el.style.webkitTransition = val;
    }

    init() {
      const self = this;
      self.transform = 'translate3d(0,0,0)';
      this.$el.addEventListener('touchstart', function(event) {
        start = event.touches[0].clientX;
        self.transition = '';
        timestamp = new Date().getTime();
      }, false);

      this.$el.addEventListener('touchmove', function(event) {
        event.preventDefault();
        var tempDate = new Date();
        if (tempDate.getTime() - timestamp < 100)
          return;

        timestamp = tempDate.getTime();

        let mv = Math.round(event.touches[0].clientX - start);
        let page = self.index == 0 ? 0 : -(self.index * clientX);
        let newX = page + mv;
        self.transform = 'translate3d(' + newX + 'px,0,0)';
      });

      this.$el.addEventListener('touchend', function(event) {
        end = event.changedTouches[0].clientX;
        let moveX = end - start;
        let tran = (Math.abs(moveX) / clientX);

        let am = 0.5 * tran.toFixed(1);

        // 如果超过屏幕的 25% 则切换页面

        tran *= 100;
        if (tran > 25) {
          am = 0.5 - am;
          self.transition = 'transform ' + am + 's linear';
          if (moveX > 0) {
            self.index > 0 ? self.index-- : self.index = 0;
          } else {
            self.index < (len - 1) ? self.index++ : self.index = (len - 1);
          }

          let newX = -(self.index * clientX);
          self.transform = 'translate3d(' + newX + 'px,0,0)';
          // self.animation = ('from ' + self.transform + ' to ' + 'translate3d(' + newX + 'px,0,0)');
        } else { // 还原页面
          self.transition = 'transform ' + am + 's linear';
          let newX = (self.index == 0) ? maxX : -(self.index * clientX);
          self.transform = 'translate3d(' + newX + 'px,0px,0px)';
        }
      });

      for (let i = 0; i < this.footer.children.length; i++) {
        this.footer.children[i].addEventListener('click', function(event) {

          for (let i = 0; i < self.footer.children.length; i++) {
            if (self.footer.children[i] == event.currentTarget) {
              self.moveTo(i + 1);
              break;
            }
          }
        }, false);
      }
    }

    moveTo(index) {
      if (index < 1 || index > this.len) return;
      var t = index - this.index;
      t = Math.abs(t) * 0.5;
      this.index = index;
      var newX = -(--this.index * clientX);
      // this.transition = 'transform '+ t +'s linear';
      this.transform = 'translate3d(' + newX + 'px,0,0)';
    }

  }

  var obj = new TabComponent($el, config);
  obj.init();
  return obj;
}
