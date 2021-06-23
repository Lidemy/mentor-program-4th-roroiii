import $ from 'jquery' 
import { getComments, addComments } from './api'
import { appendCommentToDOM, appendStyle } from './utils'
import { cssTemplate, getLoadMoreButton, getFrom } from './templates'

export function init(options) {
  let siteKey = ''
  let apiUrl = ''
  let containerElement = null
  let commentDOM = null

  let lastID = null;
  let isEnd = false;
  let loadMoreClassName 
  let commentsClassName 
  let commentsSelector
  let formClassName
  let formSelector

  siteKey = options.siteKey
  apiUrl = options.apiUrl
  loadMoreClassName = `${siteKey}-load-more`
  commentsClassName = `${siteKey}-comments`
  formClassName = `${siteKey}-add-comment-from`
  commentsSelector = '.' + commentsClassName
  formSelector = '.' + formClassName

  containerElement = $(options.containerSelector)
  containerElement.append(getFrom(formClassName, commentsClassName))
  appendStyle(cssTemplate)


  commentDOM = $(commentsSelector)
  getNewComments()

  commentDOM.on('click', `.${loadMoreClassName}` , () => {  // 點擊按鈕再拿一次留言
    getNewComments()
  })
  
  //送出資料
  $(formSelector).submit((e) => {
    e.preventDefault()
    const nickNameDOM = $(`${formSelector} input[name=nickname]`)
    const contentDOM = $(`${formSelector} textarea[name=content]`)
    const newCommentData = {
      site_key: siteKey,
      nickname: nickNameDOM.val(),
      content: contentDOM.val(),
    };
    addComments(apiUrl, siteKey, newCommentData, data =>{
      if (!data.check_ok) {
        console.log(data.message); // 如果沒拿到資料，報錯誤訊息
        return
      }
      //TODO
      appendCommentToDOM(commentDOM , newCommentData ,true);
      nickNameDOM.val('');
      contentDOM.val('');
    })
  });

  // 拿留言
  function getNewComments() {
    const commentDOM = $(commentsSelector)
    $(`.${loadMoreClassName}`).hide();
    if (isEnd) { 
      return  // 如果 isEnd 就跳出不執行以下的程式
    }
    getComments(apiUrl, siteKey, lastID, data => {
      if (!data.check_ok) {
        console.log(data.message); // 如果沒拿到資料，報錯誤訊息
        return
      }
      const comments = data.discussion;
      for (let comment of comments) {
        appendCommentToDOM(commentDOM , comment); //拿出所有資料並新增上去
      }
      let length = comments.length;
      if (length < 5) {
        isEnd = true;
        $(`.${loadMoreClassName}`).hide();
      } else {
        lastID = comments[length - 1].id;
        const loadMoreButtonHtml = getLoadMoreButton(loadMoreClassName)
        $(commentsSelector).append(loadMoreButtonHtml);  // 加上載入更多按鈕
      }      
    })
  }

}



