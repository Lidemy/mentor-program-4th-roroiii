const streamsLength = 20;
const GAMES_API = 'https://api.twitch.tv/kraken/games/top?limit=5'
const LIVE_STREAMS_API = 'https://api.twitch.tv/kraken/streams'
const headerData = {
  'Accept': 'application/vnd.twitchtv.v5+json',
  'Client-ID': 'h55uw1lc9z8ac5qtjxhtpbnaguqcxj',
}

// 顯示熱門名稱在Navbar
function appendNavbar(name) {
  const elementNav = document.querySelector('.navbar');
  name.forEach((gameName) => {
    const addDiv = document.createElement('div')
    addDiv.classList.add('navbar_list')
    elementNav.appendChild(addDiv)
    addDiv.innerHTML = `<a href="#">${gameName}</a>`
  })
}

// 顯示熱門 Game
function appendView(twitchGames) {
  const elementView = document.querySelector('.view_contain')
  twitchGames.top.forEach((twitchGame) => {
    const addDiv = document.createElement('div')
    const templateView = `
      <div class="view">
        <div class="view_box">
          <img src="${twitchGame.game.box.large}" alt="">
        </div>
        <div class="view_info">
          <div class="view_info-logo">
            <img src="${twitchGame.game.logo.small}" alt="">
          </div>
          <div class="view_info-title">遊戲名稱：${twitchGame.game.name}</div>
          <div class="view_info-name">觀看次數：${twitchGame.viewers}</div>
        </div>
      </div>`
    elementView.appendChild(addDiv)
    addDiv.innerHTML = templateView
  })
}

// 顯示前 streamsLength 個熱門 Streams
function hotStreams(twitchStreams) {
  const containView = document.querySelector('.view_contain')
  containView.innerHTML = '<div></div>'
  for (let i = 0; i < streamsLength; i++) {
    const addDiv = document.createElement('div')
    const templateGame = `
        <div class="stream">
          <div class="stream_view">
            <img src="${twitchStreams.streams[i].preview.large}" alt="">
          </div>
          <div class="stream__info">
            <div class="stream__avatar">
              <img src="${twitchStreams.streams[i].channel.logo}" alt="">
            </div>
            <div class="stream_text">
              <div class="stream_title">${twitchStreams.streams[i].channel.status}</div>
              <div class="stream_channel">${twitchStreams.streams[i].channel.name}</div>
            </div>
          </div>
        </div>`
    containView.appendChild(addDiv)
    addDiv.innerHTML = `${templateGame}`
  }
}

// 抓 Game
async function getGames() {
  const response = await fetch(GAMES_API, {
    headers: headerData,
    method: 'GET',
  })
  const data = await response.json();
  return data
}

async function game() {
  try {
    const twitchGames = await getGames()
    const name = []
        twitchGames.top.forEach((value) => {
          name.push(value.game.name)
        })
        appendNavbar(name)
        appendView(twitchGames)
  } catch (error) {
    console.log('錯誤', error)
  }
}

// 抓直播
async function getStreams(gameName) {
  const response = await fetch(`${LIVE_STREAMS_API}?game=${encodeURIComponent(gameName)}`, {
    method: 'GET',
    headers: headerData,
  })
  const data = response.json()
  return data
}

async function stream(gameName) {
  try {
    const twitchStreams = await getStreams(gameName);
    hotStreams(twitchStreams)
    document.querySelector('h2').innerText = gameName;
    document.querySelector('p').innerHTML = `Top 20 popular live ${gameName} sorted by current viewers`
  } catch (error) {
    console.log('錯誤', error)
  }
}

// 點擊選單切換 Streams
const clickNav = document.querySelector('.navbar')
clickNav.addEventListener('click', (even) => {
  const gameName = even.target.text
    stream(gameName)
})

game()
