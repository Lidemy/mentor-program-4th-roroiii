<?php
    require_once('conn.php');

    $result = $conn->query('SELECT * FROM roroiii_comment ORDER BY id DESC');
    if(!$result) {
       die('error' . $conn->error);
    }
    $username = NULL;
    if (!empty($_COOKIE['username'])) {
        $username = $_COOKIE['username'];
    }
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
    <div>
        <?php if (!$username) {?>
            <a class="board__btn" href="register.php">註冊</a>
            <a class="board__btn" href="login.php">登入</a>
        <?php } else {?>
            <a class="board__btn" href="logout.php">登出</a>
        <?php } ?>
    </div>
        <div class="board__title">Comments</div>
        <form class ="board__new-comment-form" method="POST" action="handle_add_comment.php">
            <?php if ($username) {?>
                <textarea name="content" rows="5"></textarea>
                <input class="board__submit-btn" type="submit">
            <?php } else { ?>
                <h3>請登入留言</h3>
            <?php }?>
        </form>
        <div class="board__hr"></div>
        <section>
            <?php
                while($row = $result->fetch_assoc()){
            ?>
            <div class="card">
                <div class="card__avatar"></div>
                <div class="card__body">
                    <div class="card__info">
                        <span class="card__author">
                            <?php echo $row['nickname']?>
                        </span>
                        <span class="card__time">
                            <?php echo $row['create_at']?>
                        </span>
                    </div>
                    <div class="card__content">
                        <?php echo $row['content']?>
                    </div>
                </div>
            </div>
        <?php } ?>
        </section>
    </div>
</body>
</html>