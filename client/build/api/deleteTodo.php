<?php

require_once('../../../config/connect.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$_POST = json_decode(file_get_contents('php://input'), true);
$result = array("success" => false);

if (isset($_POST["id"]) && !empty($_POST["id"])) {
  $id = $_POST["id"];

  $deleteTodoQuery = $link->prepare("DELETE FROM todos
                                    WHERE id = ?");
  $deleteTodoQuery->bind_param("i", $id);
  
  if ($deleteTodoQuery->execute()) {
    $result["success"] = true;
  }
  
  $deleteTodoQuery->close();
}

$link->close();

print(json_encode($result));

?>