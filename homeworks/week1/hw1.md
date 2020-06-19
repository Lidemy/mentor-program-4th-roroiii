## 交作業流程

### 上傳作業到 GitHub

第一次要先把第四期的內容 `git clone` 回來，然後 `git init` 這個專案

1. (master) `git ckeckout -b week1` 切過去並建立一個新的 branch 叫 week1
2. 修改專案檔案內容
3. (week1) `git push origin week1`  
4. 到 GitHub 上 Pull Requests 按下[Compare & pull requests ] >> 按下[Create pull requests]

### 作業助教改完後

1. (week1) `git checkout master` 切回主幹
2. (master) `git pull origin master`  同步回來 local 本地端
3. (master) `git branch -d week1`  刪除本地端的 branch(因為遠端檔案已合併就不需要分支了)
	
---
	
### Branch 開發流程

1. `git branch b名稱`  開發新功能，先用 Branch 新建一個是好習慣  
2. `git checkout b名稱`  切換到 b名稱 分支做開發
3. `git checkout master`  開發完成切回主幹
4. `git merge b名稱`  把 b名稱 的分支合併進 Master
5. `git commit -am "c名稱"`  commit 修改的內容，結束