// css 樣式
export function appendStyle(cssTemplate) {
  const styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  styleElement.appendChild(document.createTextNode(cssTemplate))
  document.head.appendChild(styleElement)
}

//js xss escape
export function escapeHTML(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 新增留言
export function appendCommentToDOM(container, comment, isPrepend) {
  const html = `
    <div class="card mb-2 mt-3">
      <div class="card-body">
        <div class="card-top d-flex">
          <h5 class="card-title">${escapeHTML(comment.nickname)}</h5>
        </div>
          <p class="card-text content">${escapeHTML(comment.content)}</p>
          <input hidden value="${comment.id}"/>
        </div>
      </div>
    </div>`;
  if (isPrepend) {
    container.prepend(html);
  } else {
    container.append(html);
  }
}