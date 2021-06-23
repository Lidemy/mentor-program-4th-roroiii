<?php
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');  // 編碼 utf-8
  header('Access-Control-Allow-Origin: *');

  // 判斷值有沒有輸入
  if (
    empty($_POST['nickname']) ||
    empty($_POST['site_key']) ||
    empty($_POST['content'])
  ) {
    $json = array(
      "check_ok" => false,
      "message" => "Please input missing fields"
    );

    $response = json_encode($json);  // 轉成 json 格式
    echo $response;
    die();
  };

  $nickname = $_POST['nickname'];
  $site_key = $_POST['site_key'];
  $content = $_POST['content'];

  $sql = "INSERT INTO roroiii_discussions(nickname, site_key, content) values (?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss', $nickname, $site_key, $content);
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

  $json = array(
    "check_ok" => true,
    "message" => "success!"
  );

  $response = json_encode($json);
  echo $response;

?>