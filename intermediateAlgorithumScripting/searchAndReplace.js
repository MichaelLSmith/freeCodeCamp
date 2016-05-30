
function myReplace(str, before, after) {
    
    var capPos = before.search(/[A-Z]/);
    console.log(before);
    console.log(capPos);
    
    if (capPos === 0) {
        after.charAt(0)
    }
    
    var nString = str.replace(before, after);
    
    //the next step is to be case sensitive.
    //use a regular expression on the original string, searching for any capital letter other than the first letter.
    //if it find any, save its index position and then replace it in the new string.
    //Alternative: the reg expression finds any caps on the before variable, convert the first letter of the after variable.
    
    // console.log(nString);
    
    //check out this page: http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
    //the solution with 40 votes.
    
    
    
//   return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// should return "A quick brown fox leaped over the lazy dog"

myReplace("Let us go to the store", "store", "mall")
//should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
//should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling")
//should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john")
//should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms")
// should return "Let us get back to more Algorithms".