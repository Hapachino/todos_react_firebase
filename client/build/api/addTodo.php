<?php

require_once("../../../config/connect.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$_POST = json_decode(file_get_contents("php://input"), true);

if (isset($_POST["todoText"]) && !empty($_POST["todoText"])) {
  $todoText = $_POST["todoText"];
  $userId = 1;

  $completeTodoQuery = $link->prepare("INSERT INTO todos (todoText, userId, completed)
                                        VALUES ($todoText, $userId, False)");
  $completeTodoQuery->bind_param("si", $todoText, $userId);
  $completeTodoQuery->execute();

  $completeTodoQuery->close();
}

$link->close();

?>
