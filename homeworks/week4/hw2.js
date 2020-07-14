const request = require('request');

const webUrl = 'https://lidemy-book-store.herokuapp.com/';
const action = process.argv[2];
const books = process.argv[3];

// 印出前二十本書的 id 與書名
function listBook() {
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
function readBook() {
    request(
        {
            url: `${webUrl}books/${books}`,
        },
        (error, response, body) => {
            if (error) {
                return console.log(`輸出失敗 ${error}`);
            }
            const toJson = JSON.parse(body);
            return console.log(`${toJson.id} ${toJson.name}`);
        },
    );
}
// 刪除 id 為 books 的書籍
function deleteBook() {
    request.delete(
        {
            url: `${webUrl}books/${books}`,
        },
        (error, response) => {
            if (error) {
                console.log(response.statusCode);
                return console.log(`刪除失敗 ${error}`);
            }
            return console.log(`刪除了 ID 為 ${books} 的書籍。`);
        },
    );
}
// 新增一本名為 books 的書
function createBook() {
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
function updateBook() {
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
// 判斷條件
if (action === 'list') { listBook(); }
if (action === 'read') { readBook(); }
if (action === 'delete') { deleteBook(); }
if (action === 'create') { createBook(); }
if (action === 'update') { updateBook(); }
