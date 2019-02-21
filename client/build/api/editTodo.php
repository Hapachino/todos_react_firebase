<?php

require_once('../../../config/connect.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$_POST = json_decode(file_get_contents('php://input'), true);

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
  $editTodoQuery->execute();

  $editTodoQuery->close();
}

$link->close();

?>