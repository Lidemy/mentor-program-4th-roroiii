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

function isPrime(n) {
	// 單獨判斷１
	if (n === 1) {
		return false;
	}
	// 判斷是不是質數
	for (let i = 2; i < n; i += 1) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

function solve(input) {
	const n = Number(input[0]);
	for (let i = 1; i <= n; i += 1) {
		const p = Number(input[i]);
		if (isPrime(p)) {
			console.log('Prime');
		} else {
			console.log('Composite');
		}
	}
}
