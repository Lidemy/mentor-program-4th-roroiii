## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
加密只是保證傳輸資料的方式不被知道，但是如果被發現方法是什麼，很容易資料就會被拿走。
如果被拿走的資料經過雜湊，無法直接看出來資料的內容是什麼，就多了另一層防護。
而密碼沒有經過雜湊就存在資料庫，不只管理者能直接看見使用者的密碼，如果資料庫不小心被盜取，所有使用者的密碼也都會被偷走。
所以加密跟雜湊都是資訊安全的基本。

看完本週參考資料後加上：
雜湊不可逆，加密可逆，叫做解密。

## `include`、`require`、`include_once`、`require_once` 的差別
include 載入檔案執行如果有錯誤不會中止錯誤，會繼續執行跟跳出錯誤訊息。
require 會中斷檔案執行並跳出錯誤訊息。

用英文語意來看，require 比較偏向必須的檔案，所以有錯誤會中斷執行。
include_once 跟 require_once 都是只載入一次，避免重複載入造成效能不佳或錯誤。

參考資料：[PHP：require V.S. include](http://code-beginner.logdown.com/posts/389687-phprequire-vs-include)
[深入理解require與require_once與include以及include_once的區別](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/239900/)
## 請說明 SQL Injection 的攻擊原理以及防範方法
在網站有輸入框的地方，打上 SQL 的語法，或是用字串拼接的方式造成程式變成另一個意思。
防範方式就是跳脫特定字元（例如：<>?/ 之類的符號），不用 sprintf() 做資料庫的讀取，改用 SQL prepare()

##  請說明 XSS 的攻擊原理以及防範方法
使用 javaScript 或是特定語法，讓網站執行攻擊者想做的事情，例如跳出奇怪的廣告或是導到其他網頁。
也有可能是使用 GET 把惡意參數藏在網址裡面
在網頁藏了一張隱藏圖片，把帶著 cookie 資訊的 reqeust，傳送到攻擊者的 Server ，這樣 cookie 就被偷走了。

防範方式也是跳脫特定字元，把輸出的內容轉成存文字。
參考同學的筆記：[第十二週 資訊安全 - 常見攻擊：XSS、SQL Injection
SQL Injection](https://yakimhsu.com/project/project_w12_Info_Security-XSS_SQL.html)

## 請說明 CSRF 的攻擊原理以及防範方法
中文翻譯為「跨站請求偽造」，全稱是 Cross Site Request Forgery。
又稱作 one-click attack ，點一下就中招了。
可以在你不知道的情況下，把你網站的資料偷走或是刪除。
可能你在心理測驗的網站，按下開始，結果自己網站的資料被刪除了。

防禦的方式是檢查，是不是同一個網域發送的 request
還有怎麼擋掉從別的 domain 來的 request

重要資訊如銀行轉帳或線上刷卡，加上簡訊驗證碼或圖形驗證碼

加上 CSRF token
在 form 裡面加上一個 hidden 的欄位存隨機生成的 session，再把這個 session 跟使用者比對是不是相同的。
每段不同的 session 就應該要更換一次。

參考資料：[讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)