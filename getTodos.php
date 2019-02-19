<?php

require_once("../config/connect.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$getTodosQuery = $link->prepare("SELECT * 
                                  FROM todos
                                  WHERE user_id = ?");
$getTodosQuery->bind_param("s", 1);
$getTodosQuery->execute();

$todos = $getTodosQuery->get_result();

print(json_encode($todos));

?>