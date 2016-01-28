function destroyer(arr) {

  var checks = Array.prototype.slice.call(arguments);
  checks.splice(0,1);
  return arr.filter(function(v,i){
    return checks.indexOf(v) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);