export const cssTemplate = '.comments { max-width: 800px; margin: auto; padding-top: 3rem;}'

export function getFrom(className, commentsClassName) {
  return `
  <div>
    <form class="${className}">
      <div class="form-group">
        <label>暱稱</label>
        <input name="nickname" type="text" class="form-control" placeholder="nickname"/>
      </div>
      <div class="form-group">
        <label>留言內容</label>
        <textarea name="content" class="form-control" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">送出</button>
    </form>
    <div class="${commentsClassName}"></div>
  </div>`
}

export function getLoadMoreButton(className) {
  return `<button class="${className} mt-3 mb-3 btn btn-primary">載入更多</button>`
}