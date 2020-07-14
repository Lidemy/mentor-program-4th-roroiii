const request = require('request');

const options = {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
        /* eslint-disable-next-line */
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'h55uw1lc9z8ac5qtjxhtpbnaguqcxj',
    },
};

function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
        const info = JSON.parse(body);
        const twitchGame = info.top;
        for (let i = 0; i < twitchGame.length; i += 1) {
            console.log(`${info.top[i].viewers}  ${info.top[i].game.name}`);
        }
    }
}

request(options, callback);
