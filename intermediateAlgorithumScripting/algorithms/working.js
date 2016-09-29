// jshint esversion:6
function uniteUnique(arr) {
    // console.log(arguments);
    let args = [...arguments];
    console.log(args);
    let hash = {};//hash table to store values to compare
    let output = []; //consider using map or filter to create new array automatically.

    /*
    forEach or map??? or filter
    1. go through each value of args array. Each of these in an internal array
    2. do another forEach on each internal array
    3. If value is an array {
            if ivalue[0] is in hash table {
                do nothing to output array
            }
            else (if ivalue[0] is not in hash table) {
                add value to hash table
                push value to output array
            }
        }
        Else (if value isn't an array) {
            if ivalue is in hash table {
                do nothing to output array
            }
            else (if ivalue is not in hash table) {
                add value to hash table
                push value to output array
            }
        }
    */

    //forEach for the args array
    args.forEach( (v, i) => {
        console.log('index: ');
        console.log(i);
        console.log('value:');
        console.log(v);

        v.forEach( (ivalue, iIndex ) => {
            console.log('Inner index: ');
            console.log(iIndex);
            console.log('Inner value:');
            console.log(ivalue);
            console.log('hash: ');
            console.log(hash);

            //check if value is array:
            if(Array.isArray(ivalue)){
                console.log('in if check array');
                //check if value at first index (asumes all arrays only hold only one value)
                if(hash.hasOwnProperty( ivalue[0] )){
                    console.log('in check has on array value');
                    console.log('do nothing');
                    output.push(ivalue);
                }
                /*
                if it is array, but value doesn't exist in hash table
                1. add value of array first index to hash table
                2. push value to output array.
                */
                else {
                    console.log('in else for array but not in hash');
                    hash[ivalue[0]] = ivalue[0];
                    output.push(ivalue);
                }
            }
            //if value isn't an array, check if value exists in hash table
            else {
                if (hash.hasOwnProperty( ivalue )){
                    console.log('in not array, value exists');
                    console.log('do nothing');
                }
                /*
                if it does exist
                1. Add value to hash table
                2. do nothing to the output array
                */
                else {
                    console.log('in not array, value doesnt exist');
                    hash[ivalue] = ivalue;
                    //then push that value to output array.
                    output.push(ivalue);
                }
            }
            console.log('output in Inner forEach')
            console.log(output);
        });
        })

    console.log(output);

    return arr;

}
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].
