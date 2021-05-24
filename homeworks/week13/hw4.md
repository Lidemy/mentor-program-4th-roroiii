## Webpack 是做什麼用的？可以不用它嗎？
Webpack 是一種打包程式碼的工具，有很多套件可以設定
可以把不同的模組套件跟資源打包成一包程式檔。
像是可以把程式碼壓縮、相容不同瀏覽器版本等，也有預處理器的相關套件，可以撰寫 SCSS 檔並自動處理成 CSS 檔案。

如果網頁內容相對簡單，也不需要程式壓縮處理與相容各個瀏覽器版本，那麼其實可以不用到 Webpack 也是可以的。

## gulp 跟 webpack 有什麼不一樣？
gulp 偏任務型腳本，你可以自訂任務執行的程式內容。 像是 task Manager 的角色，寫得出來基本上都做得到，自由度比較高。

webpack 就是將所有東西通通打包，bundler 在一起，中間會經過 loader ，可以在打包之前做一些事情，之後在 bundler 在一起。

loader -> webpack -> bundler
## CSS Selector 權重的計算方式為何？
* important > inline style > id > class > element > *
* 行內元素 ( inline style ) > 頁面內 class > 引入 class 
* 後面寫的 css 樣式會蓋掉前面寫的 css 樣式
