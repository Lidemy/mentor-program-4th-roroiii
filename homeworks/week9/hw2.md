## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
* VARCHAR 可變長度，可以設置最大長度，適合用長度會變動的屬性。
* TEXT 不用設置長度，不知道最大長度的時候可以使用。
* 讀取速度 VARCHAR > TEXT ，所以能用 VARCHAR 的時候就不用 TEXT 。

參考資料：[MySQL性能優化之char、varchar、text的區別](https://www.twblogs.net/a/5c126982bd9eee5e40bb4de6)



## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

* Cookie 可以記住使用者狀態，解決 HTTP 無法帶狀態的狀況。
* Cookie 可以經由伺服器來設定也可以由瀏覽器設置，是一種瀏覽器與伺服器互相溝通的機制。
	- Server 傳送 Set-cookie 這個 Header 來設置資訊
	- 瀏覽器傳送 Cookie Header 資訊給 Server
* PHP 可以透過 setcookie() 設定 Cookie 的狀態。



## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
在網址列輸入一些參數就可以把留言內容刪除了。
或是登入後可以假扮成別人的留言，刪除別人的留言。
沒有移除 HTML tag，會有被攻擊的疑慮。
密碼儲存成明碼，這樣登入資料庫就可以知道使用者的密碼，資料庫被破解或是管理者可能會監守自盜。
