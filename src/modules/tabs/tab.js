export default function (el, option) {
  var self = this;
  self.el = (typeof (el) === 'string') ? document.querySelector(el) : el;
  self.option = option;
  self.index = 0;
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
    maxX = 0,
    minX = -((len - 1) * clientX);

  var util = {
    transform(el) {
      var tran = typeof (el.style.transform) === 'undefined' ? el.style.webkitTransform : el.style.transform;
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

  self.el.addEventListener('touchstart', function (event) {
    start = event.touches[0].clientX;
    timestamp = new Date().getTime();
  }, false);

  self.el.addEventListener('touchmove', function (event) {
    event.preventDefault();
    var tempDate = new Date();
    if (tempDate.getTime() - timestamp < 100)
      return;

    timestamp = tempDate.getTime();

    let mv = Math.round(event.touches[0].clientX - start);
    let page = self.index == 0 ? 0 : -(self.index * clientX);
    let newX = page + mv;
    self.el.style.webkitTransform = 'translate3d(' + newX + 'px,0,0)';
  })

  self.el.addEventListener('touchend', function (event) {
    end = event.changedTouches[0].clientX;

    let moveX = end - start;
    let tran = (Math.abs(moveX) / document.body.clientWidth) * 100;



    // 如果超过屏幕的 25% 则切换页面
    if (tran > 25) {

      if (moveX > 0) {
        self.index > 0 ? self.index-- : self.index = 0;
      } else {
        self.index < (len - 1) ? self.index++ : self.index = (len - 1);
      }

      let newX = - (self.index * clientX);
      self.el.style.webkitTransform = 'translate3d(' + newX + 'px,0,0)';
    } else {// 还原页面
      let newX = (self.index == 0) ? maxX : - (self.index * clientX);
      self.el.style.webkitTransform = 'translate3d(' + newX + 'px,0px,0px)';
    }
  })
}
