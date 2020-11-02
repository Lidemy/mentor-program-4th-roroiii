<?php
    session_start();
    require_once('conn.php');
    require_once('utils.php');

    $username = NULL;
    $user = NULL;
    if(!empty($_SESSION['username'])) {
        $username = $_SESSION['username'];
        $user = getUserFromUsername($username);
    };
    
    if ($user === NULL || $user['role'] !== "ADMIN") {
        header("Location: index.php");
        exit;
    }

    $stmt = $conn->prepare(
        'SELECT id, role, nickname, username FROM roroiii_user ORDER BY id ASC'
    );
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
    <title>後台管理</title>
</head>
<body>
    <header class="warning">
         <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
    </header>
    <div class="board__container">
        <section>
            <table class="board__table">
                <tr>
                    <th class="board__table-pd">id</th>
                    <th class="board__table-pd">role</th>
                    <th class="board__table-pd">nickname</th>
                    <th class="board__table-pd">username</th>
                    <th class="board__table-pd">調整身份</th>
                </tr>
                <?php
                    while($row = $result->fetch_assoc()){
                ?>
                <tr>
                    <td class="board__table-pd"><?php echo escape($row['id']); ?></td>
                    <td class="board__table-pd"><?php echo escape($row['role']); ?></td>
                    <td class="board__table-pd"><?php echo escape($row['nickname']); ?></td>
                    <td class="board__table-pd"><?php echo escape($row['username']); ?></td>
                    <td class="board__table-pd">
                        <a href="handle_update_role.php?role=ADMIN&id=<?php echo escape($row['id']); ?>">管理員</a>
                        <a href="handle_update_role.php?role=NORMAL&id=<?php echo escape($row['id']); ?>">使用者</a>
                        <a href="handle_update_role.php?role=BANNED&id=<?php echo escape($row['id']); ?>">停權</a>
                    </td>
                </tr>
                <?php } ?>
            </table>
        </section>
    </div>
    <script>
    </script>
</body>
</html>