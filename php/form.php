<?php
/**
 * Created by PhpStorm.
 * User: andrew
 * Date: 11/2/15
 * Time: 11:03 PM
 */
$postData = array();
foreach($_POST as $data){
    array_push($postData, $data);
}

foreach($postData as $newData){
    print $newData;
}