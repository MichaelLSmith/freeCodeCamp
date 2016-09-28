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

    console.log('initial string: ' + str);

    //find the first instance of a vowel in the str.
    //search for the regex from vowelTest.
    re = /[aeiou]/i;
    let firstVowel = str.search(re);
    console.log(`firstVowel: ${firstVowel}`);

    //create a substr of str the firstVowel forward and split it into an array
    subStr = str.substr(firstVowel)
    subStr = subStr.split('');
    // console.log(typeof subStr );
    console.log(`subStr: ${subStr}`);

    //get all the consonants that come before first vowel

    var cons = str.substring(0,firstVowel);
    cons = cons.split('');
    console.log(`cons: ${cons}`);
    console.log(cons[0]);

    if (cons[0] === undefined) {
        console.log('in if');
        subStr.push('w');
    }
    else {
        for(let i = 0; i < cons.length; i++){
        subStr.push(cons[i]);
        }
    }
        subStr.push('a','y');
        console.log(subStr);
    str = subStr.join('');
    console.log(str);

  return str;
}

// translatePigLatin("california"); // should return "aliforniacay".
// translatePigLatin("paragraphs"); // should return "aragraphspay".
// translatePigLatin("glove");// should return "oveglay".
// translatePigLatin("algorithm"); // should return "algorithmway".
// translatePigLatin("eight"); //should return"eightway".


//tests:
// console.log('test.js');
// //
// //
// (function () {
//   'use strict';
//
//   describe('translatePigLatin', function () {
//       it('translates california to aliforniacay', function () {
//         expect(translatePigLatin('california')).toEqual('aliforniacay');
//       });
//       it('translates paragraphs to aragraphspay', function () {
//         expect(translatePigLatin('paragraphs')).toEqual('aragraphspay');
//       });
//       it('translates glove to oveglay', function () {
//         expect(translatePigLatin('glove')).toEqual('oveglay');
//       });
//       it('translates eight to eightway', function () {
//         expect(translatePigLatin('eight')).toEqual('eightway');
//       });
//   });
// })();
