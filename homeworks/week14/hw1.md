# 短網址運作流程圖
![](https://i.imgur.com/KwgHOPi.png)


 名詞解釋

## Remote Dictionary Server(Redis)
- 記憶體內資料存放區 （key-value database）
- 常用來做快取（Cache 或譯做暫存）
- 可以減輕資料庫的負擔
- 使用傳統磁碟的資料庫需要在磁碟來回處理才能執行大多數的操作，而 Redis 這類記憶體內資料存放區則不受此限制，因此回應時間更快。

參考資料
[Redis：記憶體內資料存放區。運作方式和使用理由](https://aws.amazon.com/tw/redis/)
[資料庫的好夥伴：Redis](https://blog.techbridge.cc/2016/06/18/redis-introduction/)


## Bloom Filter
- 布隆過濾器
- 優點：查詢時間快速、索引資料結構小
- 缺點：只能回答你絕對不在，但是無法確認該物件一定在，有誤判的可能（false positive）

後來發現這個好像有點難...目前簡單的理解是這樣，想了解更多可以再看參考資料

參考資料
[[論文解讀][Bloom Filter] 深入討論 Bloom Filter](https://www.evanlin.com/BloomFilter/)
[布隆過濾器 Bloom Filter](https://rust-algo.club/collections/bloom_filter/)
[資料結構大便當：Bloom Filter](https://medium.com/@Kadai/%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E5%A4%A7%E4%BE%BF%E7%95%B6-bloom-filter-58b0320a346d)

---

#### 繪圖心得
短網址的圖是參考 [同學畫的這張圖](https://i.imgur.com/Cpn43tO.png)，因為看網路上很多種畫法跟解釋越看越不明白，就把同學這張畫得很棒的圖，嘗試用自己的理解翻譯成中文，針對不懂的名詞去找了資料，真的有增進理解程度，雖然目前還是有點似懂非懂的狀態，之後再慢慢把知識點補起來～