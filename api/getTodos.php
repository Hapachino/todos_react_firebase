<?php

require_once("../config/connect.php");

$getTodosQuery = $link->prepare("SELECT * 
                                  FROM `todos`
                                  WHERE `user_id` = ?");
$userId = 1;
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

$link->close();

print(json_encode($todos));

?>