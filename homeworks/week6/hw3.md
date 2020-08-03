## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

第一組，&lt;dl&gt;&lt;dt&gt;&lt;dd&gt;組合，常見於 HTML 網頁文案中的一種排版技巧。
```
<dl> 清單
    <dt></dt>項目
    <dd></dd>描述
<dl>
```

第二組，一個獨立的圖片區塊，並可為圖片加上說明文字。
```
<figure>
<img src="/images/logo.png" alt="logo">
<figcaption>這是圖片的說明文字</figcaption>
</figure>
```

第三組，輸入框群組。
```
<fieldset>
<legend>輸入框上的說明小字</legend>
<input type="email" name="email">
<button>Ok</button>
</fieldset>
```

## 請問什麼是盒模型（box modal）
定義內容的一個區塊，
包含 `margin`, `border`, `padding`, `content`
要注意的是 border 的粗細是包含在盒模型內的所以要記得算進去，
後來因為計算盒模型太麻煩就出現了 `box-sizing: border-box;` 元素的內距跟邊框都不會增加元素本身的寬度，方便利於開發。
可利用 chrome 網頁開發工具查看盒模型的樣子。
>資料參考[重新認識 CSS - box-sizing](https://titangene.github.io/article/css-box-sizing.html)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
`inline` 是行內元素，會並排彼此之間的元素，但是設定 margin 跟 padding 是會有寬高的只是不會影響別的元素。
`block` 是區塊元素，預設佔滿一整列，下個元素會自動換到新的一行，可以設定寬高與內外距。
`inline-block` 有點像 `inline` 跟 `block` 的小孩，有 `inline` 可以並排元素的特性又可以像 `block` 一樣設定寬高。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
`static` 是預設的排版模式，很少會用到這個屬性。

`absolute` 會往上一層（父層）去找定位，找不到就會一直找找找到 HTML 為止，如果上一層有設定任何 `relative` `absolute` 跟 `fixed` 的屬性， `absolute` 就會定位在這上面。

更好的說法是「 `absolute` 的定位點是往上找第一個 position 不是 `static` 的元素」

`relative` 通常是拿來給 `absolute` 定位用的。

`fixed` 可以固定在視窗的任意位置不動，常見於擾人的蓋版廣告。