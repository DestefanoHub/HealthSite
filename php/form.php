<?php
/**
 * Created by PhpStorm.
 * User: andrew
 * Date: 11/2/15
 * Time: 11:03 PM
 */
$form = $_POST['form'];
$userAnswers = Array();
$correctAnswers = Array();
$return = Array();

for($i = 0; $i < count($form); $i+=2){
    $userAnswers[] = $form[$i];
    $correctAnswers[] =  $form[$i+1];
}

for($j = 0; $j < count($userAnswers); $j++){
    if($userAnswers[$j]['value'] == $correctAnswers[$j]['value']){
        $result = array("name" => $userAnswers[$j]['name'], "value" => true, "answer" => $correctAnswers[$j]['name']);
        $return[] = $result;
    } else{
        $result = array("name" => $userAnswers[$j]['name'], "value" => false, "answer" => $correctAnswers[$j]['name']);
        $return[] = $result;
    }
}

header("Content-Type: application/json");
echo json_encode($return);
exit;