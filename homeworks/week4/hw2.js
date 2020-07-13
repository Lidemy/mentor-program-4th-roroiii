const request = require('request');

const webUrl = 'https://lidemy-book-store.herokuapp.com/';
const action = process.argv[2];
const books = process.argv[3];

// 印出前二十本書的 id 與書名
if (action === 'list') {
    const count = 20;
    request(
        {
            url: `${webUrl}books?_limit=${count}`,
            form: {
                id: '',
                name: '',
            },
        },
        (error, response, body) => {
            if (error) {
                console.log(response.statusCode);
                return console.log(`印出失敗 ${error}`);
            }
            const toJson = JSON.parse(body);
            for (let i = 0; i < count; i += 1) {
                console.log(`${toJson[i].id} ${toJson[i].name}`);
            }
            return response;
        },
    );
}

// 輸出 id 為 books 的書籍
if (action === 'read') {
    request(
        {
            url: `${webUrl}books/`,
            form: {
                id: '',
                name: '',
            },
        },
        (error, response, body) => {
            if (error) {
                console.log(response.statusCode);
                return console.log(`輸出失敗 ${error}`);
            }
            const toJson = JSON.parse(body);
            return console.log(`${toJson[books - 1].id} ${toJson[books - 1].name}`);
        },
    );
}

// 刪除 id 為 books 的書籍
if (action === 'delete') {
    request.delete(
        {
            url: `${webUrl}books/${books}`,
            form: {
                id: '',
            },
        },
        (error, response) => {
            if (error) {
                console.log(response.statusCode);
                return console.log(`刪除失敗 ${error}`);
            }
            console.log(response.statusCode);
            return console.log(`刪除了 ID 為 ${books} 的書籍。`);
        },
    );
}

// 新增一本名為 books 的書
if (action === 'create') {
    request.post(
        {
            url: `${webUrl}books`,
            form: {
                id: '',
                name: books,
            },
        },
        (error, response) => {
            if (error) {
                console.log(response.statusCode);
                return console.log(`新增失敗 ${error}`);
            }
            return console.log(`新增一本名為 ${books} 的書。`);
        },
    );
}

// 更新 id 為 books 的書名為 bookName
if (action === 'update') {
    const bookName = process.argv[4];
    request.patch(
        {
            url: `${webUrl}books/${books}`,
            form: {
                id: books,
                name: bookName,
            },
        },
        (error, response) => {
            if (error) {
                console.log(response.statusCode);
                return console.log(`更新失敗 ${error}`);
            }
            return console.log(`更新 ID 為 ${books} 的書名為 ${bookName} 。`);
        },
    );
}
