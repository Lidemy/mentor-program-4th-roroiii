import $ from 'jquery' 

export function getComments(apiUrl, siteKey, before, cb) {
  let APIUrl = `${apiUrl}/api_comment.php?site_key=${siteKey}`;
  if (before) {
    APIUrl += '&before=' + before;
  }
  $.ajax({
    url: APIUrl,
  }).done((data) => {
    cb(data);  // 把拿到的 data 傳入 cb function執行得到結果
  });
}

export function addComments(apiUrl, siteKey, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/api_add_comment.php`,
    data,
  }).done((data) => {
    cb(data)
  });
}