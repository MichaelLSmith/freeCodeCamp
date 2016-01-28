function where(arr, num) {
  // Find my place in this sorted array.
  
 arr.sort(function(a,b){ return a - b; });
 
//find the index position of the val less than num

for(var i in arr){
    if(arr[i] >= num){ return arr.indexOf(arr[i]); }
    
}
   
//   return num;
}

console.log(where([5, 3, 20, 3], 5));