function capitalize(str) {
  	var strUpper = str.split("");   //把字串切割成陣列
  	var UpperOne;     //存放轉換的第一個大寫字
	if(str[0].charCodeAt() >= 97 && str[0].charCodeAt() <= 122){
		UpperOne = str[0].toUpperCase();
		strUpper.splice(0, 1, UpperOne);   //插入,刪除,替換
	} else {
		strUpper.join("");
	}
  	return strUpper.join("");
}
console.log(capitalize('hello'));