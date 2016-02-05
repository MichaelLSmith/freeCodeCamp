function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
    arr = arr.filter(function(v){ return v; })

    console.log(arr);
  
  return arr;
}

bouncer([7, "ate", "", false, 9])// should return [7, "ate", 9].
bouncer(["a", "b", "c"]) //should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) //should return [].

