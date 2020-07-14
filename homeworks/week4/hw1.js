const request = require('request');

request(
    {
        url: 'https://lidemy-book-store.herokuapp.com/books?_limit=10',
        form: {
            id: '',
            name: '',
        },
    },
    (error, response, body) => {
        // console.log(response.statusCode);
        const toJson = JSON.parse(body);
        for (let i = 0; i < toJson.length; i += 1) {
            console.log(`${toJson[i].id} ${toJson[i].name}`);
        }
    },
);
