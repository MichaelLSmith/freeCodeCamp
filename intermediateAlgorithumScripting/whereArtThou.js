function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

//loop through array of objects (collection), searching for property value from source object.

//Collection Array
// 1. loop through collection array of objects
// 2. iterate through each object using a for in loop

//Source Object
// 3. Look in source obj 




// 3. iterate through source object to compare if it matches the active property of current object property from the collection.


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
