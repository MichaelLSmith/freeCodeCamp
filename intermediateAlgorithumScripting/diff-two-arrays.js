var t0 = performance.now();
console.log(t0);

function diff(arr1, arr2) {
  // Same, same; but different.
  var arr = arr1.concat(arr2);
  var arrLen = arr.length;
  var hash = {};
  var dupes = [];

  for (var i = 0; i < arrLen; i++) 
  {
      if (hash.hasOwnProperty( arr[i]) )
      {
          dupes.push(arr[i]);
      }
      else {
          hash[arr[i]] = arr[i];
      }
  }
  function unique(item) {
      if(dupes.indexOf(item) === -1)
      return item;
  }
  
  var newArr = arr.filter(unique);
  


  return newArr;
}

console.log(diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

var t1 = performance.now();
console.log(t1);

console.log( "Call to diff took " + (t1 - t0) + " milliseconds.");
// diff( ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] );

