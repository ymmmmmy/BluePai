function nav(tag) {
    if (tag == "chengpin") {
        $(".nav li").on("click", function () {
            $(this).addClass("on").siblings().removeClass("on");
        })
    }
    if (tag === "liaoliao") {
        $(".nav a").on("click", function () {
            $(this).addClass("on").siblings().removeClass("on");
        })
    }
}