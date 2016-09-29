// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//     // console.log('index: '+i);
//     // console.log(a);
//     // console.log(b);
//   return a.concat(b);
// }, []);
// // flattened is [0, 1, 2, 3, 4, 5]
// console.log(flattened);

// jshint esversion:6
function uniteUnique(arr) {
    // console.log(arguments);
    let args = [...arguments];
    console.log(args);

    let output = args.reduce(function(p,c,i){
        // console.log('start');
        // console.log('index: ' + i);
        // console.log('current:');
        // console.log(c);
        // console.log('previous');
        // console.log(p);
        return p.concat(c);

        },[]
    );
    // output.sort();
    console.log('output: ');
    console.log(output);
    // output = output.filter(function(elm, i){
    //     console.log('start');
    //     console.log('index: ' + i);
    //     console.log('elm:');
    //     console.log(elm);
    //     console.log(elm -1);
    //     console.log(output);
    //     return elm !== i -1;
    // },0);

    let array = [];
    for(let i = 0; i < output.length; i++){
        // console.log(i);
        console.log(output[i]);
        console.log(output[i-1]);

        if(output[i] !== output[i -1] || output[i -1] === undefined){
            console.log('in if statement');
            array.push(output[i]);
        }

    }

    console.log(array);

    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].
