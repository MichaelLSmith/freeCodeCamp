var arr = [ 1,'none','none',4,5,7,1,2,'gate',2,5,6,4,'gate' ];
var arrLen = arr.length;
//Create an empty Hash Table.
// Take the first element of the array and check whether it is in the Hash Table. If not, put the element in the Hash Table. If yes, return the element.
// Repeat the above step for all the elements of the array.

var hash = {};
var dupes = [];


for (var i = 0; i < arrLen; i++) 
{
    // console.log(arr[i]);
    
    if (hash.hasOwnProperty( arr[i]) )
    {
        dupes.push(arr[i]);
    }
    else {
        hash[arr[i]] = arr[i];
    }
}


// console.log(hash);
// console.log(dupes);

function unique(item) {
    if(dupes.indexOf(item) === -1)
    return item;
}

console.log(arr.filter(unique));

