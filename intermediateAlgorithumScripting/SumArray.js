function sumAll(arr) {

    // var max = Math.max.apply(null, arr); 
    // var min = Math.min.apply(null, arr);
    //using sort will arrange the array with min,max org.
    
    
    var allNums = [1,4];
    
    //a for each that adds 1 to each number, but how do you add the new nums to the array while the foreach is working on it?
    allNums.forEach(function(v,i){
       allNums.push(v + 1);
       console.log(allNums);
    });
    
    

    
    
    
    
    
    
    // var sum = arr.reduce(function(prev,cur){
    //     return prev + cur;
    // });
    
    // return sum;
}

console.log(sumAll([1, 4]));