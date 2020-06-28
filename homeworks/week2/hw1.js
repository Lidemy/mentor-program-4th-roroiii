function printStars(n) {
	var str = "";
	for(var i = 1; i < n; i++) {
		str += "* \n";
	}
	str += "*";
	console.log(str);
}

printStars(5);
