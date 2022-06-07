$(function () {


    // 歌曲播放功能
    function musicPlay() {
        var audio = $("#audio")[0];
        // 获得到当前的audio标签，而不是一个jquery对象
        // 如果在暂停状态就播放，如果在播放状态就暂停
        if (audio.paused) {
            audio.play();
            $("#playImg").attr("src", "./images/pause.png")
        } else {
            audio.pause();
            $("#playImg").attr("src", "./images/play-btn_03.png")
        }
        // 播放时间与总时间显示
        // 定时器控制器
        var palyTimer = null;
        palyTimer = setInterval(function () {
            if (audio.paused) {
                clearInterval(palyTimer)
            }

            var palyTime = audio.currentTime;
            // 获取播放时间的分
            var m_time = parseInt(palyTime / 60);
            // 获取播放时间的秒
            var s_time = parseInt(palyTime % 60);
            // 获取总时长 的分和秒
            var total_time = audio.duration;
            var m_total_time = parseInt(total_time / 60)
            var s_total_time = parseInt(total_time % 60)

            function checkTime(m, s) {
                if (m < 10) {
                    m = "0" + m
                } else {
                    m += ""
                }
                if (s < 10) {
                    s = "0" + s
                } else {
                    s += ""
                }
                return m + ":" + s
            }
            var pagePassTime = checkTime(m_time, s_time)
            var totalPassTime = checkTime(m_total_time, s_total_time)

            $("#passTime").html(pagePassTime);
            $("#totalTime").html(totalPassTime);

            // 获得当前播放时长的百分比
            var palyTimePercent = palyTime / total_time
            if (total_time - palyTime > 0) {
                // 还有时间播放
                $(".prodress-bar-pass").width(palyTimePercent * 100 + "%")
            } else {
                $(".prodress-bar-pass").width(0)
            }

        }, 1000)
    }

    $("#playBtn").on("click", function () {
        musicPlay()
    })




    // 获取文章内容
    $.ajax({
        type: "get",
        url: "http://localhost/bluesever/page_yuezhang.php/",
        success: function (data) {
            data = JSON.parse(data)
            // console.log(data);
            $(".artical-title-h3").html(decodeURI(data.artical.artical_title))
            $(".blog-details-content").html(decodeURI(data.artical.artical_cont))
            $(".eye-num").html(decodeURI(data.artical.eye_num))
            $(".wechat-num").html(decodeURI(data.artical.wei_chat_num))
            $(".current-data").html(decodeURI(data.artical.artical_create_time))
            for (let i = 0; i < data.labels.length; i++) {
                $(".blog-datails-labels").append("\
                <span class='label'>"+ data.labels[i] + "</span>\
                ")
            }
        }
    })

    // 获取乐章页面的相关阅读数据
    $.ajax({
        type: "get",
        url: "http://localhost/bluesever/page_yuezhang_read.php",
        success: function (data) {
            data = JSON.parse(data);
            console.log(data);
            $(data.readList).map(function (index, item) {
                $(".related_read_content").append("\
                <div class='related_read_content_show'>\
                <a href='#'>\
                    <img src='"+ item.img + "' alt='' class='reated_read_pic'>\
                    <p class='reated_read_text'>"+ item.title + "</p>\
                </a>\
            </div>\
            ")
            })
        }
    })

})