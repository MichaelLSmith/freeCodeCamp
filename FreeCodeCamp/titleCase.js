function titleCase(str) {
  var firstLetter = /\b(\s\w|^\w)/g;
  
  str = str.toLowerCase().replace(firstLetter, function(v){return v.toUpperCase()});
  
  console.log(str);
  
  return str;
}

titleCase("I'm a little tea pot");