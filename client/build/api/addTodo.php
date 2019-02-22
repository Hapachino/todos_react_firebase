<?php

require_once("../../../config/connect.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=utf-8");

$_POST = json_decode(file_get_contents("php://input"), true);

$response = [];
$response["success"] = false;

if (isset($_POST["todoText"]) && !empty($_POST["todoText"])) {
  $todoText = $_POST["todoText"];
  $userId = 1;

  $completeTodoQuery = $link->prepare("INSERT INTO todos (todoText, userId, completed)
                                        VALUES (?, ?, False)");
  $completeTodoQuery->bind_param("si", $todoText, $userId);
  
  if ($completeTodoQuery->execute()) {
    $response["success"] = true;
  }

  $completeTodoQuery->close();
}

$link->close();

print(json_encode($response));

?>
