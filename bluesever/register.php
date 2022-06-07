<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    $con = mysqli_connect("localhost", "root","", "Jocean");
    if ($con) {
        mysqli_query($con, "set names utf8");
        $sql = "insert into blueberry values (null,'$username','$password')";
        $result = mysqli_query($con, $sql);
        if($result > 0){
            echo json_encode(array("msg"=>"注册成功"));
        }else{
            echo json_encode(array("msg"=>"注册失败"));
        }
    } else {
        echo json_encode(array("msg" => "Connection Error"));
    }
?>
