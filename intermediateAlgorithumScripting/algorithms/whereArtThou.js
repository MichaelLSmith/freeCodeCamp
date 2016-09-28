function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  var indexArr = [];
  // Only change code below this line

//for loop to access each object in the collection array
for (var i = 0; i < collection.length; i++) {
   

    // c holds each obj for each running of the collection loop
    var c = collection[i];
   

    //for loop to go through source obj
    for (var key in source) {
        
        //if active collection obj does not contain the key of the current source key, note the index number of that obj
        if (c.hasOwnProperty(key) === false) {
            console.log('in if statement');
            indexArr[i] = false;
        }
        //if it does have the property, check the value. If the value doesn't match add false to the indexArr
       
        if (c[key] === source[key]) {
            indexArr[i] = true;
        }
        else { indexArr[i] = false }
    console.log('end of for-in loop');
    //end for-in loop for each active collection obj
    }
    console.log('index end of for loop:'+ i);
    console.log('indexArr');
    console.log(indexArr);
    console.log('indexArr[i]');
    console.log(indexArr[i]);
    //at the end of checking entire active obj from collection, I need to know if there were any false hits.
    if (indexArr[i] === undefined){
    console.log('in hasOwnProperty if statement');
    indexArr[i] = true;
    console.log('indexObj in if statement');
    console.log(indexArr);
    }
    
    
    
//end for loop to go through collection array
}

console.log('index after for loop');
console.log(i);
//loop through indexArr to find the index of the true obj
for (var m in indexArr) {
    if (indexArr[m] === true){
        arr.push(collection[m]);
    }
}

console.log('arr');
console.log(arr);



  // Only change code above this line
//   return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// [{ first: "Tybalt", last: "Capulet" }]

// whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
// //[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

// whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// //[{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]

// whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
//[{ "a": 1, "b": 2, "c": 2 }]
