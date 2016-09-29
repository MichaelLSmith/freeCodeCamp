function destroyer(arr) {
    console.log(arr);
    //original way of converting arguments into an array; can now
    //use spread operator (...arguments).
    var checks = Array.prototype.slice.call(arguments);
    console.log(checks);
    //splices out the first array of values in the arguments, just leaving the remaining arguments to check against.
    checks.splice(0,1);
    console.log(checks);
    console.log(arr);//arr just has the array of values to check against because the other two arguments passed into the function aren't included in arr variable. They are only accessible through the arguments obj.
    return arr.filter(function(v,i){
        //goes through the original array argument and checks each value
        return checks.indexOf(v) === -1;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);//return [1, 1];


/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*/
