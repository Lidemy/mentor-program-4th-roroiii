## Redux middleware 是什麼？
<img src="https://i.imgur.com/riadAin.gif" width=400>
middleware 中譯叫做中間件，Middleware 讓 action 被指派後進到 reducer 前先去進行額外處理，處理完後才傳進 reducer（例如 call API)。


## CSR 跟 SSR 差在哪邊？為什麼我們需要 SSR？
CSR 是 Client Side Rendering， 在 client 端把結果渲染出來，對瀏覽器右鍵查看原始碼會發現資料都寫在 js 裡面，   HTML 裡看不到原始資料，資訊都是由 js 動態渲染上去的。

SSR 是 Server Side Rendering  
顧名思義由 Server 端渲染資料，讓資料可以在 Client 端的 HTML 原始碼顯示出來。由於收尋引擎目前只有 Google 宣稱可以解讀 js 檔案內容，但不知道可以解讀到多少，而其他瀏覽器大部分都無法解讀 js 內的資訊，所以為了達到搜尋引擎優化（SEO），所以有了 SSR 的誕生。

參考資料：https://ithelp.ithome.com.tw/articles/10266781
## React 提供了哪些原生的方法讓你實作 SSR？

React 原生的 ReactDOMServer 可以產生靜態頁面，通常用在 Node 伺服器上面。
#### renderToString()
將 React 的元件 render 至 HTML，React 會回傳 HTML string
#### renderToStaticMarkup()
跟 renderToString() 類似，但是不會建立 React 用的 DOM attribute，可以節省檔案大小。

#### renderToNodeString()  
功能與 renderTostring() 相同，但僅能使用在伺服器端。

#### renderToStaticNodeString()  
功能與 renderToStaticMarkup() 相同，但僅能在伺服器端使用。

參考資料：https://zh-hant.reactjs.org/docs/react-dom-server.html
## 承上，除了原生的方法，有哪些現成的框架或是工具提供了 SSR 的解決方案？至少寫出兩種
較有名的 React SSR 框架是 Next.js ，不知道為什麼 vue 跟 Angular 的 SSR 框架名字都很像哈哈。

* Next、Gatsby、prerender（React）
* Nuxt（Vue）
* Nest（Angular）

參考資料：https://simonallen.coderbridge.io/2021/07/13/why-nextjs/