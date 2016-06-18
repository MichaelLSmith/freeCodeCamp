function fearNotLetter(str) {
    //find char code of first letter
    //find char code of second letter
    //if char code of 2nd letter === 1st + 1, move on to the next letter
    //if it doesn't, find letter with char code of 1st + 1 and return it

    var firstCode = str.charCodeAt(0);
    var currentChar;



  return str;
}

//
fearNotLetter("abce") //should return "d".
// fearNotLetter("abcdefghjklmno") //should return "i".
// fearNotLetter("bcd") //should return undefined.
// fearNotLetter("yz") //should return undefined.
