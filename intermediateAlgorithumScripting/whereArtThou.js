function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line



// 1. During the collection loop, for each key/value pair, run the source loop.

//      1.b for each collection obj k/v pair, check entire source obj.

// 2. For each source object compare the active source key/value pair to the active collection k/v pair.

// 3. If the source obj does not have the active collection k/v pair, move onto the next collection obj.

//4. If the source obj has the the active collection k/v pair, move on to the next source obj k/v pair

//If the 


//Collection Array
// 1. loop through collection array of objects
// 2. iterate through each object using a for in loop

    
    //Source Object
    // 1. Look through source obj
    // 2. Save something in a variable??? is this necessary?



// 3. If they match, continue to the next source k/v pair
//Questions
// 1. How do you know if you've reached the end of the source object?



//Source Loop
console.log('source Loop');
console.log(source);
for (var key in source){
    if (source.hasOwnProperty(key)){
                
    }
}


//Collection loop;
console.log('collection loop');
for (var i = 0; i < collection.length; i++) {
    
    var c = collection[i];
    console.log(c);
    
    for (var key in c) {
        if (c.hasOwnProperty(key)) {
            console.log(key + "->" + c[key]);   
        } 
    }
}

  // Only change code above this line
//   return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
// //[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

// whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// //[{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]

// whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
// //[{ "a": 1, "b": 2, "c": 2 }]
