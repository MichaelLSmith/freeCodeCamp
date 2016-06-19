function fearNotLetter(str) {
    //find char code of first letter
    //find char code of second letter
    //if char code of 2nd letter === 1st + 1, move on to the next letter
    //if it doesn't, find letter with char code of 1st + 1 and return it

    var currentCode,
        nextCode,
        missingCode =  undefined;

    for (var i = 0; i < str.length - 1; i++) {
        console.log('current Char: ' + str[i]);
        currentCode = str.charCodeAt(i);
        console.log('currentCode: ' + currentCode);
        console.log('currentCode + 1:');
        console.log(currentCode + 1);
        nextCode = str.charCodeAt(i + 1);
        console.log('nextCode: ' + nextCode)
        if(currentCode + 1 !== nextCode) {
            console.log('in if statement');
            missingCode = nextCode;
            console.log(missingCode);
            console.log('end of 1st if statement');
        }
    }

    console.log('missingCode: ' + missingCode);
    // missingCode !== undefined ? str = String.fromCharCode(missingCode) : str = missingCode;

    if(missingCode !== undefined) {
        console.log('in 2nd if statement');
        console.log('missingCode');
        str = String.fromCharCode(missingCode);
        console.log('end of 2nd if');
    }
    else { str = missingCode };

    console.log(str);

  return str;
}

//
fearNotLetter("abce") //should return "d".
// fearNotLetter("abcdefghjklmno") //should return "i".
// fearNotLetter("bcd") //should return undefined.
// fearNotLetter("yz") //should return undefined.
