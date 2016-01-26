function chunk(arr, size){
    var outerArr = [];

    for(var i = 0; i < arr.length; i += size){
        var innerArr = arr.slice(i, size + i);
        outerArr.push(innerArr);  
    }

return outerArr;


}
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

//slice(0,5)
			
//[[0, 1, 2, 3], [4, 5, 6, 7], [8]]