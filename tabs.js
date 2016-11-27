function load() {

    document.addEventListener('touchstart', touch, false);
    document.addEventListener('touchmove', touch, false);
    document.addEventListener('touchend', touch, false);

    var start = 0, end = 0;
    var allMove = 0;
    var clientX = document.body.clientWidth;
    var transZRegex = /\.*translateX\((.*)\)/i;
    var timestamp = 0;

    console.log(clientX);
    function touch(event) {
        var event = event || window.event;

        // var oInp = document.getElementById("inp");  

        switch (event.type) {
            case "touchstart":
                console.log("Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")");

                start = event.touches[0].clientX;
                timestamp = new Date().getTime();
                console.log(timestamp);
                break;
            case "touchend":
                console.log("<br>Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")");
                end = event.changedTouches[0].clientX;

                var moved = allMove;
                allMove = 0;
                var tran = (Math.abs(moved) / document.body.clientWidth) * 100;

                var oldText = document.querySelector('.tab-content').style.webkitTransform;
                var oldSpanText = document.querySelector('.pspan').style.webkitTransform;


                var oldVal = parseInt(transZRegex.exec(oldText)[1]);
                var oldSpanVal = parseInt(transZRegex.exec(oldSpanText)[1]);
                var t = clientX - (Math.abs(oldVal) % clientX);

                var spanW = clientX / 3;
                // 如果超过屏幕的 25% 则切换页面
                if (tran > 25) {
                    if (moved > 0) {
                        t = oldVal + (Math.abs(oldVal) % clientX);
                        if (t > 0) return;
                        var x = oldSpanVal % spanW;
                        document.querySelector('.tab-content').style.webkitTransform = 'translateX(' + t + 'px)';
                        document.querySelector('.pspan').style.webkitTransform = 'translateX(' + (oldSpanVal - x) + 'px)';

                    } else {
                        t = oldVal - t;
                        if (t < -750) return;
                        document.querySelector('.tab-content').style.webkitTransform = 'translateX(' + t + 'px)';
                        var x = spanW - (Math.abs(oldSpanVal) % spanW);
                        document.querySelector('.pspan').style.webkitTransform = 'translateX(' + (oldSpanVal + x) + 'px)';
                    }
                } else {
                    // 还原页面
                    if (moved > 0) {
                        t = oldVal - moved;
                        if (t > 0) return;
                        var x = oldSpanVal % spanW;
                        document.querySelector('.tab-content').style.webkitTransform = 'translateX(' + t + 'px)';
                        document.querySelector('.pspan').style.webkitTransform = 'translateX(' + (oldSpanVal - x) + 'px)';

                    } else {
                        t = oldVal - moved;
                        if (t < -750) return;
                        document.querySelector('.tab-content').style.webkitTransform = 'translateX(' + t + 'px)';
                        var x = spanW - (Math.abs(oldSpanVal) % spanW);
                        document.querySelector('.pspan').style.webkitTransform = 'translateX(' + (oldSpanVal + x) + 'px)';
                    }
                }
                break;
            case "touchmove":
                event.preventDefault();

                var tempDate = new Date();

                if (tempDate.getTime() - timestamp < 100) return;
                console.log(Math.round(event.touches[0].clientX));

                timestamp = tempDate.getTime();
                var temp = Math.round(event.touches[0].clientX - start);

                allMove += temp;
                start = event.touches[0].clientX;

                var oldTextM = document.querySelector('.tab-content').style.webkitTransform;
                var oldSpanTextM = document.querySelector('.pspan').style.webkitTransform;

                if (oldTextM == "") {

                    document.querySelector('.tab-content').style.webkitTransform = 'translateX(' + temp + 'px)';
                    document.querySelector('.pspan').style.webkitTransform = 'translateX(' + (Math.round((Math.abs(temp) / 3))) + 'px)';

                    return;
                }
                var oldValM = parseInt(transZRegex.exec(oldTextM)[1]);
                var oldSpanValM = parseInt(transZRegex.exec(oldSpanTextM)[1]);

                if (temp < 0) {
                    // rigth -> left
                    document.querySelector('.tab-content').style.webkitTransform = 'translateX(' + (oldValM + temp) + 'px)';
                    document.querySelector('.pspan').style.webkitTransform = 'translateX(' + (oldSpanValM + Math.round((Math.abs(temp) / 3))) + 'px)';

                } else {

                    // left -> rigth
                    document.querySelector('.tab-content').style.webkitTransform = 'translateX(' + (oldValM + temp) + 'px)';
                    document.querySelector('.pspan').style.webkitTransform = 'translateX(' + (oldSpanValM - Math.round((Math.abs(temp) / 3))) + 'px)';
                }

                break;
        }

    }
}
window.addEventListener('load', load, false);  