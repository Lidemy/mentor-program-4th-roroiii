<?php
	session_start();
    require_once('conn.php');
    require_once('utils.php');

	if (empty($_POST['content'])
	) {
		header('location: index.php?errCode=1');
		die('資料不齊全');
	}

	$username = $_SESSION['username'];
	$user = getUserFromUsername($username);

	if(!hasPermission($user, "create", NULL)) {
		header("Location: index.php");
		exit;
	}

    $content = $_POST['content'];
	$sql = "INSERT INTO roroiii_comment(username, content) values(?, ?)";
	$stmt = $conn->prepare($sql);
	$stmt->bind_param('ss',$username, $content);
	$result = $stmt->execute();
	if(!$result) {
		die($conn->error);
	}

	header("Location: index.php");
?>