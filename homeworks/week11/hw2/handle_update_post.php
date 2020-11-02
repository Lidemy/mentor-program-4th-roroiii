<?php
  session_start();
    require_once('conn.php');
    require_once('utils.php');

  $page = $_POST['page'];

  if (empty($_POST['id']) ||
      empty($_POST['title']) ||
      empty($_POST['content'])
  ) {
    header('location: ' . $page);
    die('資料不齊全');
  }

  $id = $_POST['id'];  
  $title = $_POST['title'];
  $content = $_POST['content'];

  $sql = "UPDATE roroiii_posts SET title=?, content=? WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ssi', $title, $content, $id);
  $result = $stmt->execute();
  if(!$result) {
    die($conn->error);
  }

  header('Location: ' . $page);
?>