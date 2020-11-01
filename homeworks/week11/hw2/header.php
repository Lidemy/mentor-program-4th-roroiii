<?php
  // keyword: php get current path
  $url = $_SERVER['REQUEST_URI'];
  // 包含ＯＯ的自串
  // if (strpos($a, 'are') !== false) {
  //   echo 'true';
  // }
  $isAdminPage = (strpos($url, 'admin.php') !== false);

?>
<nav class="navbar">
<div class="wrapper navbar__wrapper">
  <div class="navbar__site-name">
  <a href='index.php'>Who's Blog</a>
  </div>
  <ul class="navbar__list">
  <div>
    <li><a href="#">文章列表</a></li>
    <li><a href="#">分類專區</a></li>
    <li><a href="#">關於我</a></li>
  </div>
  <div>
    <?php if (!empty($_SESSION['username'])) { ?>
      <?php if ($isAdminPage) { ?>
        <li><a href="create_post.php">發表文章</a></li>
      <?php } else { ?>
        <li><a href="admin.php">管理後台</a></li>
      <?php } ?>
        <li><a href="logout.php">登出</a></li>
    <?php } else { ?>
      <li><a href="login.php">登入</a></li>
    <?php } ?>
  </div>
  </ul>
</div>
</nav>