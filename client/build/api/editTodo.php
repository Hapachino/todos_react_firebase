<?php

require_once('../../../config/connect.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$_POST = json_decode(file_get_contents('php://input'), true);
$result = array("success" => false);

if (
  isset($_POST["id"]) && !empty($_POST["id"])
  && isset($_POST["todoText"]) && !empty($_POST["todoText"])
) {
  $id = $_POST["id"];
  $todoText = $_POST["todoText"];

  $editTodoQuery = $link->prepare("UPDATE todos 
                                    SET todoText = ?
                                    WHERE id = ?");
  $editTodoQuery->bind_param("si", $todoText, $id);

  if ($editTodoQuery->execute()) {
    $result["success"] = true;
  }

  $editTodoQuery->close();
}

$link->close();

print(json_encode($result));

?>
