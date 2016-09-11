function aC(name) {
    return document.getElementsByClassName(name);
}
var zan = aC('thumbs');

/*循环绑定事件*/
for (var i = 0, max = zan.length; i < max; i++) {
    /*添加事件*/
    addEvent(zan[i], 'mouseup', icon);
    /*为每一个示例绑定只属于自己的静态变量（不在原型链上）*/
    zan[i].flag = 1;
}
//添加事件，兼容处理
function addEvent(node, type, callback) {
    if (node.attachEvent) {
        // IE
        node['e' + type + callback] = callback;
        node[type + callback] = function () {
            node['e' + type + callback](window.event);
        };
        node.attachEvent('on' + type, node[type + callback]);
        return;
    } else if (node.addEventListener) {
        // DOM
        node.addEventListener(type, callback, false);
        return;
    }
    // 若两种方法都不具备则使用传统事件绑定
    node['on' + type] = callback;
    return true;
}

/*点击展开
 （如何不在dom当中写传统事件绑定而得到点击对象：鼠标事件的path属性）*/
function icon(e) {
    var sectionArr = e.path;
    var name = e.path[1];
    //console.log(e);
    console.log(name.flag);
    var people = sectionArr[2].getElementsByTagName('img')[0].parentElement;
    var title = sectionArr[2].getElementsByTagName('figcaption')[0];
    var thumb = sectionArr[0];
    var after = sectionArr[2].getElementsByClassName('after')[0];
    var before = sectionArr[2].getElementsByClassName('before')[0];
    var article = sectionArr[2].getElementsByTagName('article')[0];
    var link = sectionArr[2].getElementsByClassName('link')[0];
    var span = link.getElementsByTagName('i');

    if (name.flag) {
        /*图片变换*/
        people.style.webkitTransition = 'all .1s linear';
        people.style.position = 'absolute';
        people.style.top = '3.5%';
        people.style.left = '4.8%';
        people.style.width = '16%';
        people.style.borderRadius = '100%';
        people.style.marginLeft = 'auto';
        /*标题横条变换*/
        title.style.webkitTransition = 'all .2s linear';
        title.style.top = '0px';
        title.style.padding = '17px';
        title.style.paddingLeft = '25%';
        /*点赞的变化*/
        thumb.style.webkitTransition = 'all .2s linear';
        thumb.className = 'fa fa-chevron-right';
        thumb.style.webkitTransform = 'rotate(-180deg)';
        thumb.style.top = '15%';
        thumb.style.border = '4px solid #FCE4EC;';
        /*阴影块变化*/
        after.style.webkitTransition = 'all .2s linear';
        before.style.webkitTransition = 'all .2s linear';
        after.style.top = '76px';
        before.style.top = '50px';
        before.style.zIndex = '-1';
        /*文本延时*/
        article.style.webkitTransition = 'all .3s linear';
        article.style.top = '0';
        article.style.lineHeight = '1.5';
        /*share 延时*/
        for (var j = 0, m = span.length; j < m; j++) {
            span[j].style.webkitTransition = 'all .2s linear';
        }
        setTimeout(a, 100);
        setTimeout(b, 150);
        setTimeout(c, 200);
        setTimeout(d, 250);
        function a() {
            span[0].style.top = '0px';
        }

        function b() {
            span[1].style.top = '0px';
        }

        function c() {
            span[2].style.top = '0px';
        }

        function d() {
            span[3].style.top = '0px';
        }

        name.flag = 0;
        return;
    } else {
        /*图片变换*/
        people.style.webkitTransition = 'all .1s linear';
        people.style.position = '';
        people.style.top = '';
        people.style.left = '';
        people.style.width = '95%';
        people.style.borderRadius = '';
        people.style.marginLeft = '5%';
        /*标题横条变换*/
        title.style.webkitTransition = 'all .2s linear';
        title.style.top = '330px';
        title.style.padding = '17px 90px';
        title.style.paddingLeft = '5%';
        /*点赞的变化*/
        thumb.style.webkitTransition = 'all .05s linear';
        thumb.className = 'fa fa-thumbs-o-up';
        thumb.style.webkitTransform = 'rotate(0deg)';
        thumb.style.top = '5%';
        thumb.style.border = '4px solid #FCE4EC;';
        /*阴影块变化*/
        after.style.webkitTransition = 'all .05s linear';
        before.style.webkitTransition = 'all .05s linear';
        after.style.top = '396px';
        before.style.top = '316px';
        before.style.zIndex = '0';
        /*文本延时*/
        article.style.webkitTransition = 'all .1s linear';
        article.style.top = '50px';
        article.style.lineHeight = '3';
        /*share 延时*/
        for (var j = 0, m = span.length; j < m; j++) {
            span[j].style.webkitTransition = 'all .05s linear';
        }
        span[0].style.top = '40px';
        span[1].style.top = '50px';
        span[2].style.top = '60px';
        span[3].style.top = '70px';

        name.flag = 1;
        return;
    }
}

/*精简js：换css样式的类名*/



