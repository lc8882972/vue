export default function(el, option) {
  var self = this;
  self.el = (typeof(el) === 'string') ? document.querySelector(el) : el;
  self.option = option;

  var config = {
    index: 0,
    x: 0
  }


  var start = 0,
    end = 0,
    moved = 0,
    clientX = document.body.clientWidth,
    timestamp = 0,
    regex = /\.*translate3d\((.*)\)/i,
    len = 3,
    minX = 0,
    maxX = -((len - 1) * clientX);

  function matchPoint(str) {
    if (str == '' || str == null)
      return null;
    var temp = regex.exec(str)[1];
    var array = temp.split(',');
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i].replace('px', '');
    }
    return { x: parseInt(array[0]), y: parseInt(array[1]), z: parseInt(array[2]) };
  };

  function transform() {

  }

  var util = {
    transform(el) {
      var tran = typeof(el.style.transform) === 'undefined' ? el.style.webkitTransform : el.style.transform;
      return tran
    },
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
    }
  }

  self.el.addEventListener('touchstart', function(event) {
    start = event.touches[0].clientX;
    timestamp = new Date().getTime();
  }, false);

  self.el.addEventListener('touchmove', function(event) {
    event.preventDefault();
    var tempDate = new Date();
    if (tempDate.getTime() - timestamp < 100)
      return;

    timestamp = tempDate.getTime();
    var temp = Math.round(event.touches[0].clientX - start);
    moved += temp;

    start = event.touches[0].clientX;

    var oldTextM = util.transform(self.el);
    var point = util.matchPoint(oldTextM);

    if (oldTextM == "") {
      self.el.style.webkitTransform = 'translate3d(' + temp + 'px,0,0)';
      // transform = 'translate3d(' + (Math.round((Math.abs(temp) / self.len))) + 'px,0,0)';
      return;
    }
    var oldValM = parseInt(regex.exec(oldTextM)[1]);
    // var oldSpanValM = parseInt(self.regex.exec(oldSpanTextM)[1]);
    var newVal = (oldValM + temp);
    transform = 'translate3d(' + newVal + 'px,0,0)';
    // self.ele_span.style.webkitTransform = 'translate3d(' + Math.abs(newVal) / self.len + 'px,0,0)';
  })

  self.el.addEventListener('touchend', function(event) {
    end = event.changedTouches[0].clientX;
    var swap = moved;
    moved = 0;
    var tran = (Math.abs(swap) / document.body.clientWidth) * 100;
    var oldText = util.transform(self.el);;
    // var oldSpanText = this.ele_span.style.webkitTransform;
    let point =util.matchPoint(oldText);
    var oldVal = point.x;


    // var oldSpanVal = parseInt(self.regex.exec(oldSpanText)[1]);
    var t = self.clientX - (Math.abs(oldVal) % self.clientX);
    var spanW = self.clientX / 3;
    // 如果超过屏幕的 25% 则切换页面
    if (tran > 25) {
      if (moved > 0) {
        t = oldVal + (Math.abs(oldVal) % self.clientX);
        if (t > 0) {
          transform = 'translate3d(0px,0px,0px)';
          // transform = 'translate3d(0px,0px,0px)';
        } else {
          // var x = oldSpanVal % spanW;
          transform = 'translate3d(' + t + 'px,0,0)';
          // this.ele_span.style.webkitTransform = 'translate3d(' + (Math.abs(t) / this.len) + 'px,0,0)';
        }
      } else {
        t = oldVal - t;
        if (t < self.margin_right) {
          transform = 'translate3d(' + this.minX + 'px,0,0)';
          // this.ele_span.style.webkitTransform = 'translate3d(' + Math.round(this.minX / this.len) + 'px,0,0)';
        } else {
          transform = 'translate3d(' + t + 'px,0,0)';
          // this.ele_span.style.webkitTransform = 'translate3d(' + (Math.abs(t) / this.len) + 'px,0,0)';
        }
      }
      this.change.emit(1);
    } else {
      // 还原页面
      if (moved > 0) {
        t = oldVal - moved;
        if (t > 0) {
          transform = 'translate3d(0px,0px,0px)';
          // this.ele_span.style.webkitTransform = 'translate3d(0px,0px,0px)';
        } else {
          // var x = oldSpanVal + Math.round(moved / this.len);
          transform = 'translate3d(' + t + 'px,0,0)';
          // this.ele_span.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
        }
      } else {
        t = oldVal - moved;
        if (t < this.margin_right) {
          transform = 'translate3d(' + this.margin_right + ')';
          // this.ele_span.style.webkitTransform = 'translate3d(' + Math.round(this.clientX * 0.66) + 'px,0,0)';
        } else {
          // var x = oldSpanVal + Math.round(moved / this.len);
          transform = 'translate3d(' + t + 'px,0,0)';
          // this.ele_span.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
        }
      }
    }
  })
}
