console.log('pigLatin');


//It might not be obvious but you need to remove all the consonants up to the first vowel in the case there letter does not start with a vowel.

function translatePigLatin(str) {
    //from http://stackoverflow.com/questions/5488028/how-do-i-check-for-vowels-in-javascript
    var vowelTest = (function() {
      var re = /^[aeiou]$/i;
      return function(s) {
        return re.test(s);
      }
    })();

    //find the first instance of a vowel in the str.
    //search for the regex from vowelTest.
    re = /[aeiou]/i;
    let firstVowel = str.search(re);
    console.log(`firstVowel: ${firstVowel}`);

    //create a substr of str the firstVowel forward and split it into an array
    subStr = str.substr(firstVowel).split('');
    console.log(`subStr ${subStr}`);

    //get all the consonants that come before first vowel

    

    //get the first character in the string and add it to an array.
    // var suffixArr = [str[0]];
    // var firstChar = str[0];

    // console.log(suffixArr);
    // console.log(firstChar);

    //create new string with first character removed and split it into an array
    // str = str.substr(1).split('');
    console.log('str: '+ str);

    //determine if the first character is a vowel or not. If not a vowel, combine character with 'ay'
    //
    // if (!vowelTest(firstChar)) {
    //     console.log('in if statement:');
    //     str.push(firstChar,'a','y');
    //     str = str.join('');
    //     console.log('str: '+ str);
    // }
    // else {
    //     str = str.push('w','a','y')
    //     str = str.join('');
    //     console.log('str: '+ str);
    // }
  return str;
}

translatePigLatin("california")// should return "aliforniacay".
// // translatePigLatin("paragraphs") should return "aragraphspay".
// // translatePigLatin("glove") should return "oveglay".
// // translatePigLatin("algorithm") should return "algorithmway".
// // translatePigLatin("eight") should return "eightway".
