$(function () {
    var btns = $(".login_reg_select a");
    var box = $(".account_box");

    btns.map(function (index, element) {
        // console.log(index);
        (function () {
            $(element).on("click", function () {
                $(this).addClass("on").siblings().removeClass("on");
                $(box[index]).addClass("on").siblings().removeClass("on");
            });
        }(index))
    })
    // 登录

    $("#login_btn").click(function(){
        // console.log("登录");
        var username = $("#login_account").val();
        var password = $("#login_password").val();
        if(username && password){
            $.ajax({
                url: "http://localhost/bluesever/login.php",
                type: "post",
                data: {
                    username: username,
                    password: password
                },
                success: function (data) {
                    data = JSON.parse(data);
                    // 存储到本地
                    // console.log(data[0].username)
                    localStorage.setItem("username", data[0].username);
                    if(data){
                        window.location.href="index.html";
                    }
                }
            })
        }else{
            alert("请输入用户名和密码");
        }
    })

    $("#reg_btn").click(function(){
        // console.log("登录");
        var username = $("#reg_account").val();
        var password = $("#reg_password").val();
        if(username && password){
            $.ajax({
                url: "http://localhost/bluesever/register.php",
                type: "post",
                data: {
                    username: username,
                    password: password
                },
                success: function (data) {
                    data=JSON.parse(data);
                    alert(data.msg)
                }
            })
        }else{
            alert("请输入用户名和密码");
        }
    })
})