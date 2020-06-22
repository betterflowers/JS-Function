//methods a
function reverseString(message){
  var arr = message.split("").reverse().join("");
  return arr;
}
reverseString('hello'); 

	
//methods b	
function reverseString(message){
	var arr = message.split("");
	var len = arr.length;
	var j=len/2;
for(var i=0;i<j;i++,len--)
	{tmp=arr[len-1];
	arr[len-1]=arr[i];
	arr[i]=tmp;
	}
	var k = arr.join("");
	return k;
}
reverseString('hello'); 


//methods c
function reverseString(message){
	var newString = [];
	for(var i = message.length-1,j=0;i>=0;i--,j++){
	newString[j] = message[i];
	}
	var str = newString.join("");
	return str;
}
reverseString('hello'); 


//methods d
function reverseString(message){	
	var arr = message.split("");
	var newArr = [];
	for(var i=arr.length-1,j=0;i>=0;i--,j++){
	newArr[j] = arr[i];
	}
	var str = newArr.join("");
	return str;
}
reverseString('hello'); 
