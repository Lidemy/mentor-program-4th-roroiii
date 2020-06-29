function printFactor(n) {
	var num = 1;
	if(n % n === 0) {
			console.log(1)
	}
	for(var i = 2; i < n; i++){
		if(n % i === 0) {
			num = parseInt(n % i);
			console.log(i);
		}
	}
	if(n % 1 === 0) {
	console.log(n);
	}
}

printFactor(10);
