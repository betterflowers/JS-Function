function palindrome(message){
	var arr = message.split("");
	var len = arr.length;
	for(var i = 0;i<=len/2;i++,len--){
	if(arr[i]!==arr[len-1]){
		return false;
		break;}
	else{
		continue;}
    }
		return true;
}
palindrome('hello'); 
palindrome('abcba'); 

 