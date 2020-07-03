const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
	input: process.stdin,
});

rl.on('line', (line) => {
	lines.push(line);
});

rl.on('close', () => {
	/* eslint-disable-next-line */
	solve(lines);
});

// 判斷是不是迴文
function isPalindrome(n) {
	let str = '';
	const word = n.split('');
	for (let i = n.length - 1; i >= 0; i -= 1) {
		str += word[i];
	}
	return str;
}

function solve(input) {
	if (input[0] === isPalindrome(input[0])) {
		console.log('True');
	} else {
		console.log('False');
	}
}
