function findLongestWord(str){
    
    var array = str.split(' ');
    var lengthArray = [];
    var longestLength  = -1;
    
    
    var longestString = -1;
    
    for(var r in array){
        var currentString  = array[r].length;
        // var previousString = array[r -1].length;
        
        if (currentString > longestString)
            longestString = currentString;
    }
    
searchIndex(array);

    
// 1. Go to the middle element of the array.

// 2. check if the searched element is equal to the element at the middle. If it is then return its index.

// 3. if not then check if the searched element is 'smaller' or 'larger' than the element in the middle.

// 4. if it is smaller then go to step 1 using only the lower/first half of the array instead of the whole.

// 5. else go to step 1 using only the upper/last half of the array instead of the whole.

// 6. As the array is continuously divided in 2 it will eventually reach the size of 1 giving the result.
    
    
    
}

findLongestWord.prototype.searchIndex = function (lengthArray){
    console.log('searchIndex()');
    lengthArray.length / 2;
};

findLongestWord("The quick brown fox jumped over the lazy dog");