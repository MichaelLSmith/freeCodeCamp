
function myReplace(str, before, after) {
    
    var capPos = before.search(/[A-Z]/);
    // console.log('before: '+ before);
    // console.log('after: '+ after);
    // console.log('capPos' + capPos);
    
    if (capPos >= 0) {
        //there is a capital letter in before, than capitalize the first letter of after.
        // console.log('after.charAt(capPos)');
        // console.log(after.charAt(capPos));
        var chartoCaps = after.charAt(capPos);
        // capitalizeAt()
        after   = after.substr(0, capPos) 
                //extracts all the chars from index --> forward. In this case, it's the entire string.
                + chartoCaps.toUpperCase()
                //capitalize and attach the new character to remaining string
                + after.substr(capPos + chartoCaps.length);
                //attach the a copy of string after the index position where the first substr extracted from
        // console.log(after);
    }
    str = str.replace(before, after);
    
    console.log(str);
    
    //check out this page: http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
    //the solution with 40 votes.
    
    // console.log(str);
    
//   return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// should return "A quick brown fox leaped over the lazy dog"
myReplace("Let us go to the store", "store", "mall");
//should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling");
//should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john");
//should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms");
// should return "Let us get back to more Algorithms".