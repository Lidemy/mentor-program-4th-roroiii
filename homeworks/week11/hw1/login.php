<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="./style.css">
    <title>留言板 - 登入</title>
</head>
<body>
    <header class="warning">
         <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
    </header>
    <div class="board__container">
    <div>
        <a class="board__btn" href="index.php">回留言板</a>
        <a class="board__btn" href="register.php">註冊</a>
    </div>
        <div class="board__title">登入</div>
        <?php
            if (!empty($_GET['errCode'])) {
                $code = $_GET['errCode'];
                $msg = 'Error';
                if ($code === '1') {
                    $msg = '資料不齊全';
                } else if ($code === '2') {
                    $msg = '帳號或是密碼輸入錯誤';
                }
                echo '<div class="err__msg">錯誤：' . $msg . '</div>';
            }
        ?>
        <form class ="board__new-comment-form" method="POST" action="handle_login.php">
            <div class="board__nickname">
                <label for="username">帳號：</label>
                <input type="text" name="username" class="board__nickname-input">
            </div>
            <div class="board__nickname">
                <label for="password">密碼：</label>
                <input type="password" name="password" class="board__nickname-input">
            </div>
            <input class="board__submit-btn" type="submit">
        </form>
    </div>
</body>
</html>