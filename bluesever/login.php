<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    $con = mysqli_connect("localhost", "root","", "Jocean");
    if ($con) {
        mysqli_query($con, "set names utf8");
        $sql = "select * from blueberry where username = '$username' and password = '$password'";
        $result = mysqli_query($con, $sql);
        if ($result -> num_rows > 0) {
            $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
            echo json_encode($data);
        }else{
            echo json_encode(array("msg"=>"用户名或密码不存在"));
        }
    } else {
        echo json_encode(array("msg" => "Connection Error"));
    }
?>

