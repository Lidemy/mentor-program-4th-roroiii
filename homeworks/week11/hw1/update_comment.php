<?php
	session_start();
	require_once('conn.php');
	require_once('utils.php');
	// 從 cookie 讀取 PHPSESSID(token) -> 從檔案讀取 SESSION ID 內容 -> 放入 $_SESSION

	$id = $_GET['id'];
	$username = NULL;
	$user = NULL;
    if(!empty($_SESSION['username'])) {
		$username = $_SESSION['username'];
		$user = getUserFromUsername($username);
	};
	
	$stmt = $conn->prepare(
		'SELECT * FROM roroiii_comment WHERE id=?'
	);
	$stmt->bind_param("i", $id);
    $result = $stmt->execute();
    if(!$result) {
       die('error' . $conn->error);
	}
	$result = $stmt->get_result();
	$row = $result->fetch_assoc();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="./style.css">
    <title>留言板</title>
</head>
<body>
    <header class="warning">
         <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
    </header>
    <div class="board__container">
		<div class="board__title">編輯留言</div>
		<?php
			if (!empty($_GET['errCode'])) {
				$code = $_GET['errCode'];
				$msg = 'Error';
				if ($code === '1') {
					$msg = '資料不齊全';
				}
				echo '<div class="error">錯誤：' . $msg . '</h2>';
			}
		?>
        <form class ="board__new-comment-form" method="POST" action="handle_update_comment.php">
            <?php if ($username) {?>
                <textarea name="content" rows="5"><?php echo $row['content']?></textarea>
				<input type="hidden" name="id" value="<?php echo $row['id']?>">
                <input class="board__submit-btn" type="submit">
            <?php } else { ?>
                <h3>請登入留言</h3>
            <?php }?>
        </form>
	</div>
</body>
</html>