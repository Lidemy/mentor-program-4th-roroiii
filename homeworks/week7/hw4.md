## 什麼是 DOM？
DOM 全名 Document Object Model，是 JavaScript 與 HTML 之間溝通的橋樑，DOM這個橋樑是由瀏覽器提供的，目的是讓我們去改變畫面。
由於是瀏覽器提供，所以 
	1. document 選取元素通常只能在瀏覽器上執行，但是有些 Library 也有提供這個用法（例如部分的 node.js版本）。
	2. DOM 不是原生的 JavaScript，而是由瀏覽器創造出來的語法。

而 DOM 透過 API 定義了 JavaScript 可以存取或改變 HTML 的內容、框架、樣式。
用自己理解的話說，就是 DOM 提供了某些語法，讓 JavaScript 能選取到 HTML 上的元素，然後對這個選到的元素進行操作，所以在使用 DOM 的時候，要注意自己是選到哪個 HTML 標籤位置，才不會操作錯位置。


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
捕獲事件會從 window 開始，進入到最外層的元素然後一層一層往下最後才是被點選到的那個元素。
被點選到的那個元素又會一層一層往上回報到 window ，就稱為捕獲。
不管有沒有加上監聽事件，捕獲與冒泡依然存在，而他們的順序也不會改變。


## 什麼是 event delegation，為什麼我們需要它？
就像是很多人一起吃飯，會有一個人負責去櫃檯點餐，其他人只要等點餐的那個人回來可以了。不需要每個人都去櫃檯點餐。
實作上只要在最外層的元素位置加上 addEventListener ，就可以監聽這個元素內的所有事件了非常方便。


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault() 是停止瀏覽器的預設行為，會在一開始還沒進入捕獲與冒泡階段就停止執行。
例如：有一個超連結，本來可以點選，但是因為加上了 event.preventDefault() ，這個連結怎麼點都不會有作用。

event.stopPropagation() 會進入到捕獲階段，但是不會冒泡（不會向上呈報）。

event.stopImmediatePropagation() 會阻止其他除了自己之外的任何事件傳遞。