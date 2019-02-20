<?php

require_once("../../../config/connect.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$_POST = json_decode(file_get_contents("php://input"), true);

if (isset($_POST["id"]) && !empty($_POST["id"])) {
  $id = $_POST["id"];

  $completeTodoQuery = $link->prepare("UPDATE todos 
                                        SET completed = NOT completed
                                        WHERE id = ?");
  $completeTodoQuery->bind_param("i", $id);
  $completeTodoQuery->execute();

  $completeTodoQuery->close();
}

$link->close();

?>



