function largestOfFour(arr) {
    // You can do this!
    var o = 0;
    var largestNum = 0;
    var largestArray = [];
  
    //loop for outter array
    while (o < arr.length){
        console.log('outerLoop Index: '+o);
        for (var i = 0; i < arr[o].length; i++){
            console.log('innerIndex: '+i);

            var currentNum = arr[o][i];
        
            console.log('currentNum: '+currentNum);
            console.log('largestNum: '+largestNum);
        
            if(currentNum > largestNum)
                largestNum = currentNum;

        //for outer index 0 - loop 4 times using inner index 0-3
        }
    //once the inner loop is finished push largestnumber into the array
    largestArray.push(largestNum);
    largestNum = 0;
    o++;  //increases the outer loop counter by 1. Runs after the inner loop has finished.
    }

  console.log(largestArray);
  return arr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);