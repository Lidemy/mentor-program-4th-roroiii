function join(arr, concatStr) {
	var arrStr = arr.toString();
	for(var i = 0; i < arr.length; i++) {
		if(arr.length <= 1){
			arrStr += concatStr;
		}
		arrStr = arrStr.replace(",", concatStr);
	}
	return arrStr;
}

function repeat(str, times) {
	var strRepeat = str.toString();
	for(var i = 1; i < times; i++){
		strRepeat += str;
	}
	return strRepeat;
}
console.log(join(['a'], '!'));

//console.log(join([1, 2, 3], ''))  //正確回傳值：123)
//console.log(join(["a", "b", "c"], "!")) //正確回傳值：a!b!c)
//console.log(join(["a", 1, "b", 2, "c", 3], ','))   //正確回傳值：a,1,b,2,c,3)

console.log(repeat('a', 5));
//console.log(repeat('a', 5)); //正確回傳值：aaaaa
//console.log(repeat('yoyo', 2));  //正確回傳值：yoyoyoyo