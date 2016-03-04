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

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);