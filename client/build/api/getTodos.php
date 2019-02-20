<?php

require_once("../config/connect.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$userId = 1;

$getTodosQuery = $link->prepare("SELECT * 
                                  FROM todos
                                  WHERE userId = ?");
$getTodosQuery->bind_param("i", $userId);
$getTodosQuery->execute();

$getTodosQuery->bind_result($id, $userId, $todoText, $completed);

$todos = [];

while ($getTodosQuery->fetch()) {
  $todo = [];
  $todo['id'] = $id;
  $todo['userId'] = $userId;
  $todo['todoText'] = $todoText;
  $todo['completed'] = $completed;

  array_push($todos, $todo);
}

$getTodosQuery->close();
$link->close();

print(json_encode($todos));

?>