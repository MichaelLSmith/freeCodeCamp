// var arr = [1,1,2,3,3,4,4,5,6,6,7];
var arr = [ 1,'none','none',4,5,7,1,2,'gate',2,5,6,4,'gate' ];

var newArr = [];

arr = arr.sort();
console.log(arr.length/2);
var mid = Math.floor(arr.length/2);
console.log(arr.length);
console.log(mid);
// console.log(arr[mid]);

console.log(arr);

for(var i = 0; i<arr.length; i++){
  console.log('index: '+i);
  console.log(arr[mid]);
  console.log(arr[mid]+1);
  if(arr[mid] === arr[mid]+1){
    console.log('inIf');
    arr.splice(arr[mid], 2);
    console.log(i);
    console.log(arr);
  }
}

