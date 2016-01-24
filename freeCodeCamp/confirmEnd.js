function end(str, target) {
  
//   var length = str.length;
  var array = str.split(' ');
//   var outcome;
  console.log(array[1]);
//   console.log(array[array.length -1]);
  
  
    if(array[1] == undefined){//if there is not a second word in the array (therefore if the second index position is undefined)
    console.log('first if');
        var stringLength = array[0].length -1;
        console.log(array[0][stringLength]);
            if (array[0][stringLength] === target){
                console.log('second if');
                return true; }
                
            else {return false;}
    }
    if(array[array.length -1] === target)
            return true;
  
    else return false;
}

console.log(end("Walking on water and developing software from a specification are easy if both are frozen", "specification") );