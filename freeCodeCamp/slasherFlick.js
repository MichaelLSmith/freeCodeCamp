function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArr = arr.splice(0,howMany);
  console.log('arr: '+arr);
  console.log('newArr: '+newArr);
  
  
  return arr;
  
  //alt: return arr.slice(howMany);
  
}

slasher([1, 2, 3], 2); // [3] you need to return what is remaining. splice returns what is cut out. Split give what remains, but you need to save it in a new array.
slasher([1, 2, 3], 9);
