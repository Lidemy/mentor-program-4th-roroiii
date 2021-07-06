## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

 ### DNS - Domain Name System
 將 Domain 和 IP 位置對應的一個分散式資料庫
 簡單來說就是把 Domian 翻譯成 IP 位置，可以透過 DNS 伺服器查詢指定的 Domain 或 IP 位置
 
 **運作流程**
 client 端輸入 Domain -> 發送 Requqst 到 DNS -> DNS 查詢 Domain 實際的 IP 位置 -> 實際 IP 位置連線到 Server 存取網頁 -> Server 回傳網頁給 client 端（回傳給瀏覽器）

### Google Public DNS
Google 的公開 DNS 目的是讓一般使用者開啟網頁的反應數度加快，減少網頁初期開啟的等待時間。
可以改善網路安全，透過快取直接取得查詢結果，不必等候伺服器回應。

google DNS 的壞處就是，上網紀錄會被記錄下來，還有訪問中國的網站的時候，可能會超級慢或被擋下來。

參考資料：
[維基百科 - 域名系統](https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F)
[(筆記) CS75 (Summer 2012) Lecture 9 Scalability Harvard Web Development David Malan](https://giafudiary.blogspot.com/2019/06/load-balancehttp-request.html)
[Mac OS X 使用 Google Public DNS 改善網路瀏覽體驗](http://blog.lyhdev.com/2011/11/mac-os-x-google-public-dns.html)
[還在 Google DNS 8.8.8.8？更安全好用的「1.1.1.1」讓臉書不卡卡](https://www.vedfolnir.com/world-best-dns-1111-rather-than-8888-and-hinet-dns-29245.html)

## 什麼是資料庫的 lock？為什麼我們需要 lock？
- 避免兩個人搶同一個東西，造成超賣（Race Condition）
- 會用 update for 鎖定這行程式，確定執行完成後下面的程式才會繼續執行。
- 會有效能上的耗損（因為要等 for update 執行完成）

```sql
$conn->autocommit(FALSE);
$conn->begin_transaction();
$conn->query("SELECT amount from products where id = 1 for update");
$conn->commit();
```


## NoSQL 跟 SQL 的差別在哪裡？
### SQL 
- 是關聯是資料庫，可以使用 join 語法
- 有欄位 table 資料表名稱等等。
- 需要一開始就想好資料庫結構，否則資料龐大，要再修改欄位名稱會很麻煩，會花上許多時間。

### NoSQL 
Not Only SQL
- 資料庫是沒有關連性的，也沒有結構(Schema)，一個 key 對應一筆 value。
- 無法使用 join 語法。
- 可以拿來儲存像是 facebook 的貼文資料，或是按讚數
- 擴充方式只要購買新的主機空間即可，有別於傳統 SQL 需要設定很多東西。

## 資料庫的 ACID 是什麼？
為了確保 Transaction 的正確性。

1. **原子性 atomicity 不是全部成功，就是全部失敗**
舉例：轉帳不是成功就是失敗，沒有在跟你轉一半的。

2. **一至性 consistency 維持資料一致（錢總數相同）** 
小明戶頭有 100元，轉帳給小美 90 元，帳戶裡剩下 10 元。小明跟小美的帳戶加起來的錢還是 100 元。

3. **隔離性 isolation 多筆交易不會互相影響（無法同時修改同一個值）**
小明跟小美轉帳是獨立的狀態，不會突然出現阿華從中間交易把錢轉走這件事情。

4. **持久性 durability 交易成功後，寫入的資料會一直存在**
轉帳成功後不會因為 ATM 壞掉，剛剛轉帳的帳目就出現問題。
就像存摺上的金額一樣，多一筆少一筆都不行，要記錄的清清楚楚。


參考資料
[Database Transaction & ACID](https://oldmo860617.medium.com/database-transaction-acid-156a3b75845e)