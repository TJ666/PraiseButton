/**
 * @file Class PraiseButton
 * @author v_yangtianjiao(v_yangtianjiao@baidu.com)
 * @time 18/03/24
 */

(function (window, $) {
    class PraiseButton {
        constructor(option) {
            const {
                dom = document.body,       // 点赞容器
                cla = '',                  // 点赞icon className
                hasPraise = false,         // 是否已点赞
                total = 0,                 // 已点赞数
                cb = null                  // 点赞回调
            } = option;

            this.dom = dom;
            this.cla = cla;
            this.hasPraise = hasPraise;
            this.total = total;
            this.cb = cb;

            this.domFragment = document.createDocumentFragment();
            this.totalDom = document.createElement('span');
            this.iconDom = document.createElement('span');
        }

        init() {
            this.bindEvent();
            this.renderDom();
        }

        renderDom() {
            this.totalDom.innerHTML = this.total;
            this.iconDom.className = this.cla;
            this.iconDom.innerHTML = this.hasPraise ? '取消点赞' : '点赞';

            this.domFragment.appendChild(this.totalDom);
            this.domFragment.appendChild(this.iconDom);

            this.dom.appendChild(this.domFragment);
        }

        bindEvent() {
            this.iconDom.onclick = this.praise.bind(this);
        }

        praise(e) {
            const addNum = this.hasPraise ? -1 : 1;
            this.total += addNum;
            this.hasPraise = !this.hasPraise;
            this.renderDom();
            this.cb && this.cb(this);
        }
    }

    class Thumb extends PraiseButton {
        constructor(option) {
            super(option);
            console.log(this);
        }
        bindEvent() {
            this.iconDom.onclick = this.thumbPraise.bind(this);
        }
        thumbPraise() {
            this.praise();
            let me = this;

            const i = document.createElement('i');
            const X = this.iconDom.pageX;
            const Y = this.iconDom.pageY;
            i.innerHTML = this.hasPraise ? '+1' : '-1';
            this.iconDom.appendChild(i);
            const timer = setTimeout(function () {
                timer && clearInterval(timer);
                me.iconDom.children[0] && me.iconDom.children[0].remove();
            }, 500);
        }
    }
    $.extend({
        praiseButton(option) {
            return new PraiseButton(option);
        }
    });
    $.extend({
        thumb(option) {
            return new Thumb(option);
        }
    });
})(window, jQuery);



let thumb = $.thumb(
    {
        dom: document.getElementById('testDom'),
        total: 111,
        cb: data => {
            console.log(data);
        }
    }
);

thumb.init();