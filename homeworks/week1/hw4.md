## 跟你朋友介紹 Git


## Git 的使用方式

1. 先 `cd` 到要版控的資料夾
2. `git init`  初始化版控
3. `git add .` 把這個資料夾內的所有資料加入版本控制
4. `git commit -m "hello"` 或 `git commit -am "hello"`  寫一個 commit 紀錄叫做 hello

---

### push & pull 把資料推上去跟拉下來 
#### git push
把本地的推上去
`git push origin master/branch名稱`

推分支上去
`git checkout branch名稱`
`git push origin branch名稱`

#### git pull
把遠端的拉下來
`git pull origin master/branch名稱` 

如果有衝突，修改檔案存檔完成再 commit ， push 回遠端。

--- 

菜哥~ 你如果有興趣可以再看看我做的 Git 筆記：
[Git 版本控制指令與 vim 編輯器](https://www.notion.so/roroiii/Git-vim-bc4f0dd6597e4878b012c72790d3cb2e)
[Git 與 GitHub](https://www.notion.so/roroiii/Git-GitHub-5b264c3c14904284868e25be65c0565c)
