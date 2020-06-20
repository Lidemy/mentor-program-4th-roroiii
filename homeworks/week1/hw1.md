## 交作業流程

### 上傳作業到 GitHub

第一次要先把第四期的內容 `git clone` 回來，(已包含`git init`）

1. (master) `git ckeckout -b week1` 切過去並建立一個新的 branch 叫 week1
2. 修改專案檔案內容，有新檔案記得 `git add .`
3. (week1) `git commit -am "commit 名稱"`
4. (week1) `git push origin week1`
5. 到 GitHub 上 Pull Requests 按下[Compare & pull requests ] >> 按下[Create pull requests]

### 作業助教改完後

1. (week1) `git checkout master` 切回主幹
2. (master) `git pull origin master`  同步回來 local 本地端
3. (master) `git branch -d week1`  刪除本地端的 branch(因為遠端檔案已合併就不需要分支了)
	
---
	
### Branch 開發流程

1. `git commit -am "c名稱"` 一次現在的穩定版本
2. `git branch b名稱`  開發新功能，先用 Branch 新建一個是好習慣  
3. `git checkout b名稱`  切換到 b名稱 分支做開發
4. 開發中
5. 新增的檔案，加入`git add .`
6. `git commit -am "commit 名稱"` 提交改動
4. `git checkout master`  開發完成切回主幹
5. `git merge b名稱`  把 b名稱 的分支合併進 Master
6. `git commit -am "c名稱"`  commit 修改的內容，結束