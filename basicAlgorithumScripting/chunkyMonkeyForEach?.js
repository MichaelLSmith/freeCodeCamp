// console.log(2.25 % 1);
// console.log(2 % 1);

function chunk(arr, size) {

//length of 9 means that there are 9 characters.
// 9/4 = 2 with 1 left over


//if length % num = 0 -- meaning that length is even, we just need to divide
//length by num


	//build outer array with the correct number of inner arrays.
  //divide arr.length/size --> if this has no remainder, than this is the number of inner arrays that are needed. If there is a remainder, add one more array. This is accomplished by starting a for loop at zero.
	//determine if there is a remainder by using remainder operator and dividing it by 1. If it has a decimal value, it will equal 1.
	
	// initalize output arrays
	var outerArr = [];
	var numOfArrays = (arr.length / size);
	
	if(numOfArrays !== 0){
		//we can probably get rid of this if. Use Math.floor on the numOfArrays assignment line.
	  numOfArrays = Math.floor(numOfArrays);
	}
	console.log('numOfArrays: '+numOfArrays);
	
	for(var i = 0; i <= numOfArrays; i++){
		console.log(i);
		outerArr.push([]);
	}
	console.log(outerArr);
	
	
	//now we have an multi-dimensional array with the correct structure. We now need to push the values into the inner arrays.
	var o = 0; //outer index
	

//     var smallArr = arr.filter(function(v,i){ return i <= size; } );
	
	
	arr.forEach(function(v,i){
		//for the first 4 values, push to the first array. How do we increase the outer index by one after the first 4 values have been pushed?
		if(i <= 3){ outerArr[o].push(v); }
	});
	
	
	// read this discussion of for loops and forEach http://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript
  
//     holder.push(smallArr);
    smallArr = [];
  
  
  
  // holder.push(smallArr);

//   console.log(holder);

}
	
// [ [], [], [] ]

chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
			
//[[0, 1, 2, 3], [4, 5, 6, 7], [8]]