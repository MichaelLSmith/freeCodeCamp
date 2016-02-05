function rot13(str) { // LBH QVQ VG!
 var converter = [];
 var actualUnicode = [];
 
 for(var i = 0; i < str.length; i++){
     //loop through str and convert each encrypted letter to unicode num:
     converter.push(str.charCodeAt(i));
     
     //in same loop, check if each unicode num is a space or punctuation or any non-letter char
     //new if statement if converter[i] < 90 && converter[i] > 64
     
     if(converter[i] < 91 && converter[i] > 64){
         var act = converter[i] - 13;
            if( act < 65 ) { act = converter[i] + 13; }
     }
     else act = converter[i];
     
     actualUnicode.push(act);
     
}

console.log(converter);
console.log(actualUnicode);

var actualString = String.fromCharCode.apply(actualString, actualUnicode);

console.log(actualString);



 
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
//"FREE CODE CAMP"