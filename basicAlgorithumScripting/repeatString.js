function repeat(str, num) {
    var newString = ''
  
  if(num < 0)//if num is a negative, do nothing because newString is already an empty string. It's returned at the end of the program.
    {}
  
  else{
        for (var i = 0; i < num; i++) { newString += str; console.log(i); console.log('newString: '+newString); } 
  }
return newString;
}

repeat("abc", 3); repeat("abc", -2)