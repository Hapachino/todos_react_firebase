<?php

require_once("../../../config/connect.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$_POST = json_decode(file_get_contents("php://input"), true);
$response = array("success" => false);

if (isset($_POST["id"]) && !empty($_POST["id"])) {
  $id = $_POST["id"];

  $completeTodoQuery = $link->prepare("UPDATE todos 
                                        SET completed = NOT completed
                                        WHERE id = ?");
  $completeTodoQuery->bind_param("i", $id);

  if ($completeTodoQuery->execute()) {
    $response["success"] = true;
  }

  $completeTodoQuery->close();
}

$link->close();

print(json_encode($response));

?>
