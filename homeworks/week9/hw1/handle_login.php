<?php
    require_once('conn.php');

    if (empty($_POST['username']) ||
        empty($_POST['password'])
    ) {
        header('location: register.php?errCode=1');
        die('資料不齊全');
    }

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = sprintf("SELECT * FROM roroiii_user WHERE username = '%s'AND password ='%s'",
    $username,
    $password
    );

    $result = $conn->query($sql);
    if(!$result) {
        die($conn->error);
    }
    if ($result->num_rows) {
		// echo '登入成功！';
		$expire = time() + 3600 * 24 * 30; // 30 day
		setcookie("username", $username, $expire);
		header("Location: index.php");
    } else {
        header("Location: login.php?errCode=2");
    }

?>