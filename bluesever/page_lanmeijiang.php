<?php

$page = $_GET["page"];
if ($page == 1) {
    $json_data = file_get_contents("./data/page_lanmeijiang.json");
    echo $json_data;
} else if ($page == 2) {
    $json_data = file_get_contents("./data/page_lanmeijiang2.json");
    echo $json_data;
} else {
    echo "请求失败";
}
