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
    if (!error && response.statusCode >= 200 && response.statusCode < 300) {
        const info = JSON.parse(body);
        const twitchGames = info.top;
        for (let i = 0; i < twitchGames.length; i += 1) {
            console.log(`${twitchGames[i].viewers}  ${twitchGames[i].game.name}`);
        }
    }
}

request(options, callback);
