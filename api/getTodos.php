<?php

require_once("../config/connect.php");

$getTodosQuery = $link->prepare("SELECT * 
                                  FROM `todos`
                                  WHERE `user_id` = ?");
$userId = 1;
$getTodosQuery->bind_param("i", $userId);
$getTodosQuery->execute();

// $getTodosQuery->store_result();
// $getTodosQuery->bind_result($idRow, $userIdRow, $todoTextRow, $completedRow);

// while ($getTodosQuery->fetch()) {
//   $ids[] = $idRow;
//   $userIds[] = $userIdRow;
//   $todoTexts[] = $todoTextRow;
//   $completeds[] = $completedRow;
// }

// $todos = $getTodosQuery->get_result();

$link->close();

print(json_encode($todoTexts));

?>