## 題目

### hw4：What is this?

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```
## 解答過程
一開始因為 hoisting 所以 Global VO 會先宣告

```js
hello: undefined
obj: undefined
obj2: undefined
```
之後執行 Global EC 程式，賦值給 3 個變數

```js
hello: function
obj: {
  value: 1,
  hello: function,
  inner: obj
}
obj2: {
  value: 2,
  hello: function
}
```

`obj.inner.hello()` 會執行 `console.log(this.value)` ，指到的是整個 `obj.inner` 的物件，所以 value 是 2

`obj2.hello()` 其實就是 `obj.inner.hello()` 所以也是 2

`hello()` 因為 function 在呼叫的時候並沒有給值， 所以會是 undefined 

`hello()` 在嚴格模式下也會是 undefined ，但如果沒有嚴格模式，在瀏覽器會是 window 的 value ，node.js 會是 global 的 value ，結果還是 undefined

可以用 `hello.call()` 這樣去想結果，因為沒有給 this 的值，所以是 undefined

輸出結果是：
```js
2
2
undefined

```