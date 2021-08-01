## 題目
### hw1：Event Loop
在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
console.log(1)   
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
## 解答過程

結果輸出：
```js
 1, 3, 5, 2, 4
```

執行順序
1. main thread 在 stack 先被執行。
2. stack 執行 `console.log(1)`，印出 1， `console.log(1)` pop 執行結束。

3. `setTimeout()` 被執行，然後把 callback function `() => {console.log(2)}` 丟到 WebAPIs ，瀏覽器提供的 timer 0 毫秒後馬上被丟進 task queue 裡面等待執行， `setTimeout()` pop 執行結束。

4. stack 執行 `console.log(3) `，印出 3，`console.log(3)` pop 執行結束。

5. 另一個 `setTimeout()` 被執行，然後把 callback function `() => {console.log(4)}` 丟到 WebAPIs ，timer 0 毫秒後馬上被丟進 task queue 裡面等待執行， `setTimeout()` pop 執行結束。

6. stack 執行 `console.log(5) `，印出 5 ，`console.log(5)` pop 執行結束。

7. main thread pop 執行結束。

8. task queue 裡的 `() => {console.log(2)}` 被丟到 stack 執行，印出 2 ， pop 執行結束。

9. task queue 裡的 `() => {console.log(4)}` 被丟到 stack 執行，印出 4 ， pop 執行結束。



上面說的 `setTimeout` cb 執行的 0 毫秒不一定真的是 0 毫秒，會依照程式複雜度影響實際執行時間，也有可能是 task queue 的佇列程式影響執行時間。
