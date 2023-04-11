## 題目

### hw3：Hoisting

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```js
var a = 1;
function fn() {
  console.log("1: " + a); // undefined
  var a = 5;
  console.log("2: " + a); // 5
  a++;
  var a; // 無意義宣告
  fn2();
  console.log("3: " + a); // 20
  function fn2() {
    console.log("4: " + a); // 6
    a = 20;
    b = 100;
  }
}
fn();
console.log("5: " + a); // 1
a = 10;
console.log("6: " + a); // 10
console.log("7: " + b); // 100
```

## 解答過程

一開始先從 Global Variable Object(VO) 開始， a 會宣告成 undefined，fn 宣告成 function

```js
Global VO: {
  a: undefined
  fn: function
}
```

往下找發現沒有其他宣告之後開始執行 Global Execution Context(EC)， a 的值變成 1 ，然後執行 fn 這個 function，又有一個新的 VO ，a 在 fn 裡面有被宣告，所以會先提升為 undefined， fn2 為 function

```js
fn VO: {
  a: undefined
  fn2: function
}

Global EC
Global VO: {
  a: 1
  fn: function
}
```

執行 fn EC ，這時候因為 a 還只有 hoisting 所以第 1 個 console.log 出來是 undefined，第 2 個 console.log 因為上面 a 已經給值 5 所以是 5

```js
fn EC
fn VO: {
  a: undefined
  fn2: function
}

Global EC
Global VO: {
  a: 1
  fn: function
}
```

再往下執行 fn2 ，但因為沒有 VO 所以直接執行 fn2 EC ，因為 a 的值在這裡沒有宣告，所以會到上層 fn 去找來用，所以第 4 個 console.log 出來的結果會是 fn 執行 a++ 的結果 6

之後 fn 的 a 被賦值為 20 ， b 因為沒有宣告，所以會直接 hoisting 到 Global 為 b=100

```js
fn2 EC
fn2 VO: {

}

fn EC
fn VO: {
  a: 20
  fn2: function
}

Global EC
Global VO: {
  a: 1
  fn: function
  b: 100
}
```

最後 console.log 第 5 個是 Global 的 a ，所以是 1
執行賦值 a = 10
console.log 第 6 個 a 就是 10
console.log 第 7 個 b 就是前面 hoisting 的 b = 100
