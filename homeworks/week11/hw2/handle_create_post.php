<?php
  session_start();
    require_once('conn.php');
    require_once('utils.php');

  if (empty($_POST['title']) ||
      empty($_POST['content'])
  ) {
    header('location: create_post.php?errCode=1');
    die('資料不齊全');
  }

  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
  
  $title = $_POST['title'];
  $content = $_POST['content'];

  $sql = "INSERT INTO roroiii_posts(username, title, content) values(?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss',$username, $title, $content);
  $result = $stmt->execute();
  if(!$result) {
    die($conn->error);
  }

  header("Location: admin.php");
?>