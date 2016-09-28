// var t0 = performance.now();
// console.log(t0);

function diff(arr1, arr2) {
  // Same, same; but different.
  
  
  //concatinate(combine the two arrays into one)
  var arr = arr1.concat(arr2);
  console.log(arr);
  
  var arrLen = arr.length;
  var hash = {};  //hash table to store values to compare
  var dupes = []; //array to push duplicates

  for (var i = 0; i < arrLen; i++) 
  {
      //check if property already exists in hash table
      if (hash.hasOwnProperty( arr[i]) )
      {
          //if it does, push it to the dupes array
          dupes.push(arr[i]);
          console.log('dupes array:')
          console.log(dupes);
      }
      else {
          //otherwise add it to the hash table
          console.log('in else statement');
          console.log(arr[i]);
          console.log(hash[arr[i]]);
          //set hash property key to equal arr[i] in left side of statement
          //set the value of the hash key set to arr[i] to equal arr[i]
          //the key and value will both be arr[i]
          hash[arr[i]] = arr[i];
      }
      console.log('hash and dupes in for loop');
      console.log(hash);
      console.log(dupes);
  }
  //call back function for the filter on arr variable
  //the filter goes through arr and returns an array of all the values that aren't in both original arrays. 
  function unique(item) {
      if(dupes.indexOf(item) === -1)
      return item;
  }
  
  var newArr = arr.filter(unique);
  return newArr;
}

console.log(diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

// var t1 = performance.now();
// console.log(t1);

// console.log( "Call to diff took " + (t1 - t0) + " milliseconds.");
// diff( ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] );

