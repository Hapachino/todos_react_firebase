<?php

require_once('../../../config/connect.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$_PUT = json_decode(file_get_contents('php://input'), true);

if (isset($_PUT["id"]) && !empty($_PUT["id"])) {
  $id = $_PUT["id"];

  $deleteTodoQuery = $link->prepare("DELETE FROM todos
                                    WHERE id = ?");
  $deleteTodoQuery->bind_param("i", $id);
  $deleteTodoQuery->execute();

  $deleteTodoQuery->close();
}

$link->close();

?>