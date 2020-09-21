<?php
    require_once('conn.php');

	if (empty($_POST['content'])
	) {
		header('location: index.php?errCode=1');
		die('資料不齊全');
	}

    $content = $_POST['content'];
	$username = $_COOKIE['username'];
	$user_sql = sprintf("SELECT nickname FROM roroiii_user WHERE username='%s'",
	$username
	);
	$user_result = $conn->query($user_sql);
	$row = $user_result->fetch_assoc();
	$nickname = $row['nickname'];

	$content = $_POST['content'];
	$sql = sprintf("INSERT INTO roroiii_comment(nickname, content) values('%s', '%s')",
	$nickname,
	$content
	);

	$result = $conn->query($sql);
	if(!$result) {
		die($conn->error);
	}

	header("Location: index.php");
?>