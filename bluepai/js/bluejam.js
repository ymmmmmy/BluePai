$("#pager").zPager({
    totalData: 55
});

function currentPage(currentPage) {
    /*
        触发页码数位置： Page/js/jquery.z-pager.js 64行
    */
    $(".bj_cards").html("")
    $.ajax({
        type: "get",
        url: "http://localhost/bluesever/page_lanmeijiang.php",
        data: {
            page: currentPage
        },
        success: function (data) {
            data = JSON.parse(data);
            // console.log(data);
            data = data.jam;
            for (let i = 0; i < data.length; i++) {
                let html = `
            <a href="#" class="bj_card">
                <img src="${data[i].img}" alt="">
                <i>${data[i].tag}</i>
            </a>
                `;
                $(".bj_cards").append(html);
            }
        }
    })
}