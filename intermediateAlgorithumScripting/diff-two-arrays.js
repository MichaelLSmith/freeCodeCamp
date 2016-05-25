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
      }
      else {
          //otherwise add it to the hash table
          console.log('in else statement');
          console.log(arr[i]);
          console.log(hash[arr[i]]);
          hash[arr[i]] = arr[i];
      }
      console.log('hash and dupes in for loop');
      console.log(hash);
      console.log(dupes);
  }
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

