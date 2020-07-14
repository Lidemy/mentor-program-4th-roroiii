const request = require('request');

const countryName = process.argv[2];
const webUrl = 'https://restcountries.eu/rest/v2/name/';

function findCountry() {
    request(
        {
            url: webUrl + countryName,
        },
        (error, response, body) => {
            const toJson = JSON.parse(body);
            if (error) {
                return console.log(`有錯誤 ${error}`);
            }

            for (let i = 0; i < toJson.length; i += 1) {
                const country = toJson[i].name;

                // 判斷有沒有找到
                if (country === undefined || '') {
                    return console.log('「找不到國家資訊」');
                }
                const capitals = toJson[i].capital;
                const currency = toJson[i].currencies[0].code;
                const callingCode = toJson[i].callingCodes[0];

                // 輸出訊息
                console.log('============');
                console.log(`國家：${country}`);
                console.log(`首都：${capitals}`);
                console.log(`貨幣：${currency}`);
                console.log(`國碼：${callingCode}`);
            }
            return response;
        },
    );
}
findCountry(webUrl, countryName);
