<?php
    session_start();
    require_once('conn.php');
    require_once('utils.php');
    // 從 cookie 讀取 PHPSESSID(token) -> 從檔案讀取 SESSION ID 內容 -> 放入 $_SESSION
    $username = NULL;
    $user = NULL;
    if(!empty($_SESSION['username'])) {
        $username = $_SESSION['username'];
        $user = getUserFromUsername($username);
    };

    $page = 1;
    if (!empty($_GET['page'])) {
        $page = intval($_GET['page']);
    }
    $items_per_page = 10;
    $offset = ($page - 1) * $items_per_page;
    
    $stmt = $conn->prepare('SELECT C.id AS id, C.content AS content, C.create_at as create_at, U.nickname as nickname, U.username as username FROM roroiii_comment AS C LEFT JOIN roroiii_user AS U ON C.username = U.username WHERE C.is_deleted IS NULL ORDER BY C.id DESC LIMIT ? offset ?'
    );
    $stmt->bind_param('ii', $items_per_page, $offset);
    $result = $stmt->execute();
    if(!$result) {
       die('error' . $conn->error);
    }
    $result = $stmt->get_result();
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
            <h3>你好！<?php echo $user['nickname']?>
                <span class="board__btn-nickname">編輯暱稱</span>
				<?php if ($user && $user['role'] === "ADMIN") { ?>
					<a class="board__btn-nickname" href="admin.php">管理後台</a>
				<?php } ?>
            </h3>
            <form class="hide board__nickname-form board__new-comment-form" method="POST" action="update_user.php">
                <div class="board__nickname">
                    <span>新的暱稱：</span>
                    <input type="text" name="nickname" class="board__nickname-input"/>
                    <input class="board__btn-nickname" type="submit" />
                </div>
            </form>
        <?php } ?>
    </div>
        <div class="board__title">Comments</div>
        <form class ="board__new-comment-form" method="POST" action="handle_add_comment.php">
            <?php if ($username && !hasPermission($user, "create", NULL)) { ?>
				<h3>你已被停權</h3>
			<?php } else if ($username) { ?>
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
                            <?php echo escape($row['nickname'])?>
                            (@<?php echo escape($row['username'])?>)
                        </span>
                        <span class="card__time">
                            <?php echo escape($row['create_at'])?>
                        </span>
                        <?php if ($user && hasPermission($user, "update", $row)) {?>
                            <a href="update_comment.php?id=<?php echo $row['id']?>">編輯</a>
                            <a href="delete_comment.php?id=<?php echo $row['id']?>">刪除</a>
                        <?php } ?>
                    </div>
                    <div class="card__content">
                        <?php echo escape($row['content'])?>
                    </div>
                </div>
            </div>
        <?php } ?>
        </section>
        <div class="board__hr"></div>
        <?php
            $stmt = $conn->prepare(
                'SELECT count(id) AS count FROM roroiii_comment where is_deleted IS NULL'
            );
            $result = $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();
            $count = $row['count'];
            $total_page = ceil($count / $items_per_page);
        ?>
        <div class="page-info">
            <span>總共有 <?php echo $count ?> 筆留言，頁數：</span>
            <span><?php echo $page ?> / <?php echo $total_page ?></span>
        </div>
        <div class="paginator">
            <?php if ($page != 1) { ?> 
                <a class="paginator_a" href="index.php?page=1">首頁</a>
                <a class="paginator_a" href="index.php?page=<?php echo $page - 1 ?>">上一頁</a>
            <?php } ?>
            <?php if ($page != $total_page) { ?>
                <a class="paginator_a" href="index.php?page=<?php echo $page + 1 ?>">下一頁</a>
                <a class="paginator_a" href="index.php?page=<?php echo $total_page ?>">最後一頁</a> 
            <?php } ?>

    </div>
    <script>
        var btn = document.querySelector('.board__btn-nickname');
        btn.addEventListener('click', function(){
            var form = document.querySelector('.board__nickname-form');
            form.classList.toggle('hide');
        })
    </script>
</body>
</html>