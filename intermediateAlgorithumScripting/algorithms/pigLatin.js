    console.log('pigLatin');


function translatePigLatin(str) {
    //from http://stackoverflow.com/questions/5488028/how-do-i-check-for-vowels-in-javascript
    var vowelTest = (function() {
      var re = /^[aeiou]$/i;
      return function(s) {
        return re.test(s);
      }
    })();

    //get the first character in the string and add it to an array.
    // var suffixArr = [str[0]];
    var firstChar = str[0];

    // console.log(suffixArr);
    console.log(firstChar);

    //create new string with first character removed and split it into an array
    str = str.substr(1).split('');
    console.log('str: '+ str);

    //determine if the first character is a vowel or not. If not a vowel, combine character with 'ay'

    if (!vowelTest(firstChar)) {
        console.log('in if statement:');
        str.push(firstChar,'a','y');
        console.log('str: '+ str);
    }
    else {
        str = str.push('w','a','y')
        str = str.join('');
        console.log('str: '+ str);
    }
  return str;
}




//
// translatePigLatin("california")// should return "aliforniacay".
// // translatePigLatin("paragraphs") should return "aragraphspay".
// // translatePigLatin("glove") should return "oveglay".
// // translatePigLatin("algorithm") should return "algorithmway".
// // translatePigLatin("eight") should return "eightway".
