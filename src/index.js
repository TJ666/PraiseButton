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
                cla = 'praise-btn',                  // 点赞icon className
                hasPraise = false,         // 是否已点赞
                total = 0,                 // 已点赞数
                cb = null                  // 点赞回调
            } = option;

            this.dom = dom;
            this.cla = cla;
            this.hasPraise = hasPraise;
            this.total = total;
            this.cb = cb;

            this.domFragment = document.createElement('div');
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

            this.domFragment.appendChild(this.iconDom);
            this.domFragment.appendChild(this.totalDom);

            this.totalDom.className = 'total-num';
            this.domFragment.className = 'praise-wrap';
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
        thumbPraise(e) {
            this.praise();

            const $i = $('<i>').text(`${this.hasPraise ? '+1' : '-1'}`);
            const x = e.pageX;
            const y = e.pageY;
            $i.css({
                top: y - 20,
                left: x,
                position: 'absolute',
                color: '#E94F06',
                width: '100px',
                height: '100px'
            });
            $('body').append($i);
            $i.animate({
                top: y - 120,
                opacity: 0,
                'font-size': '1.4em'
            }, 1500, function () {
                $i.remove();
            });
        }
    }

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