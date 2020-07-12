const request = require('request');

const count = 10;
request(
    {
        url: `https://lidemy-book-store.herokuapp.com/books?_limit=${count}`,
        form: {
            id: '',
            name: '',
        },
    },
    (error, response, body) => {
        // console.log(response.statusCode);
        const toJson = JSON.parse(body);
        for (let i = 0; i < count; i += 1) {
            console.log(`${toJson[i].id} ${toJson[i].name}`);
        }
    },
);
