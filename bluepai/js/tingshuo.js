$(function () {

    waterFlow();
    // 瀑布流
    function waterFlow() {
        // 获取页面的所有子元素
        var allChild = $(".ts_card");
        // 知道一行可以摆放几个
        var rowNum = 4;
        // 定义一个数组，用来存放每一行的高度
        var closeHeightArr = [];
        allChild.map(function (index, item) {
            // 如果数组长度小于4，那么直接push
            if (index < rowNum) {
                closeHeightArr.push($(item).height());
            } else {
                // 如果数组长度大于4，那么需要找出最短的那一行
                // 获取数组中最小的值，也就是第一行高度最小的那个元素
                var minHeight = Math.min.apply(null, closeHeightArr);
                // 获取最小的那一行的索引
                var minIndex = closeHeightArr.indexOf(minHeight);
                // 将最小的那一行的高度替换为最新的高度
                allChild[index].style.position = "absolute";
                allChild[index].style.top = minHeight + 10 + "px";
                allChild[index].style.left = allChild.eq(minIndex).position().left + "px";
                // 将最小的那一行的高度替换为最新的高度
                closeHeightArr[minIndex] = closeHeightArr[minIndex] + 10 + allChild[index].offsetHeight;
                $(".ts_container").height(Math.max.apply(null, closeHeightArr));
            }
        });
    }

    window.onscroll = debounce(checkReachBttom, 300)

    // 防抖
    function debounce(func, immediate) {
        var timer = null;
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(func, immediate);
        }
    }

    // 触底判断
    function checkReachBttom() {
        // 获取页面滚动高度和视口高度
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        // 获取页面最后一个子元素的高度
        var allChild = $(".ts_card");
        var latsBoxTop = allChild.eq(allChild.length - 1).offset().top + 240;
        if (scrollTop + windowHeight >= latsBoxTop) {
            // 加载网络数据
            $.ajax({
                type: "get",
                url: "http://localhost/bluesever/page_tingshuo.php",
                success: function (data) {
                    data = JSON.parse(data)
                    // 加载数据
                    for (var i = 0; i < data.data.length; i++) {
                        var item = data.data[i];
                        var html = '<div class="ts_card">' +
                            '<div class="ts_card_head">' +
                            '<img src=' + item.icon + ' alt="" class="ts_card_icon">' +
                            '<span class="ts_card_name">' +
                            '<p>' + item.title + '</p>' +
                            '<em>' + item.name + '</em>' +
                            '</span>' +
                            '<i class="tag_ts">' + item.tag + '</i>' +
                            '</div>' +
                            '<img src=' + item.img + ' alt="">' +
                            '<div class="ts_card_foot">' +
                            '<p>' + item.desc + '</p>' +
                            '<span class="ts_cardfoot_icon">' +
                            '<b class="ts_card_icon_1"></b>' +
                            '<i>' + item.zan + '</i>' +
                            '<b class="ts_card_icon_2"></b>' +
                            '<i>' + item.wechat + '</i>' +
                            '</span>' +
                            '</div>' +
                            '</div>';
                        $(".ts_container").append(html);
                    }
                    waterFlow();
                }
            })
        }
    }

})