<?php
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');  // 編碼 utf-8
  header('Access-Control-Allow-Origin: *');

  // 判斷值有沒有輸入
  if (empty($_GET['site_key'])) {
    $json = array(
      "check_ok" => false,
      "message" => "Please send site_key in url"
    );

    $response = json_encode($json);  // 轉成 json 格式
    echo $response;
    die();
  };

  $site_key = $_GET['site_key'];

  // $sql = "SELECT nickname, content, created_at, id FROM roroiii_discussions WHERE site_key =? ORDER BY id DESC";
  $sql = "SELECT id, nickname, content, created_at FROM roroiii_discussions WHERE site_key = ? " .
        (empty($_GET['before']) ? "" : "and id < ?") . 
        " ORDER BY id DESC limit 5 ";

  $stmt = $conn->prepare($sql);
  // $stmt->bind_param('s', $site_key);
  if (empty($_GET['before'])) {
    $stmt->bind_param('s', $site_key);  // 如果 before 的值為空，就不拿值
  } else {
    $stmt->bind_param('si', $site_key, $_GET['before']); // 如果 before 有值，就加上值
  }

  $result = $stmt->execute();



  // 判斷 $result 為空值顯示連線錯誤
  if (!$result) {
    $json = array(
      "ckeck_ok" => false,
      "message" => $conn->error
    );

    $response = json_encode($json);
    echo $response;
    die();
  }

  $result = $stmt->get_result();
  $discussion = array();
  while ($row = $result->fetch_assoc()) {
    array_push($discussion, array(
      "id" => $row["id"],
      "nickname" => $row["nickname"],
      "content" => $row["content"],
      "created_at" => $row['created_at']
    ));
  }


  $json = array(
    "check_ok" => true,
    "discussion" => $discussion
  );

  $response = json_encode($json);
  echo $response;

?>