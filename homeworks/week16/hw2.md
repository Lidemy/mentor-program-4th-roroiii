## 題目

### hw2：Event Loop + Scope
請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
## 解答過程

1. 第一個 console.log 出來的 i 會先執行輸出 i: 0

2. 但因為 setTimeout 是瀏覽器提供的 WebAPI ，在 stack 的 main thread 執行完成並 pop 後，才會開始執行 setTimeout 裡的 callback function，所以這些 callback function 就會在 task queue 佇列等待。

3. for 迴圈內的 `console.log('i: ' + i)` 就會先輸出所有結果。 
```js
i: 0
i: 1
i: 2
i: 3
i: 4
```
4. 因為 main thread 已經結束，這時候 i 的值已經變成 for 迴圈最後一次執行的結果 5 ， `() => {console.log(i)` 因為 scope chain 往上找到 i 的值是 5 ，五次執行輸出的結果就都是 5 。

最後輸出結果是

```js
i: 0
i: 1
i: 2
i: 3
i: 4

5 
5
5
5
5
```