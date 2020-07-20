## 請以自己的話解釋 API 是什麼
簡單講就是串接伺服器端的資料，互相溝通的一種方式。

提供 API 的人：可以決定自己要公開什麼內容，可不可以讓人修改、新增、刪除文件，並通常會提供串接 API 文件的方法。

拿取 API 的人：依據提供 API 的人所提供的串接文件來串接 API ，然後根據文件的方法可以拿到對方提供的資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
### 206 Partial Content
這個回應方法可以斷點續傳，把較大的文件分解為多個下載斷點，可同時多段下載此份文件。
separate download into multiple streams.
分解下載，多段分流。
常見使用有迅雷這種下載軟體，較大型的遊戲檔案好像也會用這種方式下載封包。

### 303 See Other
不管原請求是什麼方法，重新定向後的請求方法都是 GET （臨時重新定向）。

覺得一個好記的方法
我使用 POST 上傳資料，伺服器回應「喔～收到了，看看我顯示給你的訊息吧！」於是用 GET 顯示頁面資料給我。
有點像註冊完成最後面顯示「註冊成功！」的那一頁，並不需要使用 POST ，只要顯示一個簡單的內容告訴使用者註冊完成就好了。

### 308
跟 301 的作用一樣，被請求的資源已「永久移動到新位置」。
但差別在於使用 308 則表達重定向前後都要用相同的方法。
例如重新定向前使用 POST ，重新定向之後也只能使用 POST 。

參考資料來源：
[MDN - HTTP 狀態碼](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)
[維基百科 - HTTP 狀態碼](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)
[HTTP 中的 301、302、303、307、308 响应状态码](https://zhuanlan.zhihu.com/p/60669395)
[搞懂 http 3xx 重新導向狀態碼](https://medium.com/@dubiety/%E6%90%9E%E6%87%82-http-3xx-%E9%87%8D%E6%96%B0%E5%B0%8E%E5%90%91%E7%8B%80%E6%85%8B%E7%A2%BC-f1a288c1cd20)

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

### API 文件
Getting Started with the Restaurant API

To access and modify resources, you can use any HTTP method
`GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS`

Base URL: https://lidemy-restaurant-store.com

| 說明      	  | Method   | path             | 參數                  | 範例           |
|----------------|----------|------------------|----------------------|----------------|
| 回傳所有餐廳資料  | GET      | /restaurants      | _limit:限制回傳資料數量 | /restaurants?_limit=5 |
| 回傳單一餐廳資料  | GET      | /restaurants/:id  | 無                   | /restaurants/10  |
| 新增餐廳        | POST     | /restaurants      | name: 餐廳名稱         | 無              |
| 刪除餐廳        | DELETE   | /restaurants/:id  | 無                    | 無              |
| 更改餐廳資訊     | PATCH    | /restaurants/:id  | name: 餐廳名稱         | 無              |