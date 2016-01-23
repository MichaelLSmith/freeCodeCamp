function titleCase(str) {
  var firstLetter = /\b(\s\w|^\w)/g;
  
  str = str.toLowerCase().replace(firstLetter, function(v){return v.toUpperCase()});
  
  console.log(str);
  
  return str;
}

titleCase("I'm a little tea pot");


// String.prototype.toProperCase = function () {
//     return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    
    //this solution comes from: http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
// };
