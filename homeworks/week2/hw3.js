function reverse(str) {
    var strArr = [];
    str.split("");
    for(var i = 0; i < str.length; i++) {
    	strArr.unshift(str[i]);
    }
	console.log(strArr.join(""));    
}
reverse('hello');