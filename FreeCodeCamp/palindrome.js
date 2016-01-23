function palindrome(str){
    var regEx = /\W|_/g; // '\W' search for all non-alphanumerics chars like punctuation and whitespaces. '|' is like 'or'. 
    
    //edit string to lower case and removes whitespace
    var newStr = str.toLowerCase().replace(regEx, '');
    var rev = ''; //var to store reversed string
    
    //reverses string
    for (var i = newStr.length -1; i >= 0; i--){
        rev += newStr[i];
    }
    
    if(newStr === rev) return true;
    else return false;
}

console.log( palindrome("0_0 (: /-\ :) 0-0") );

