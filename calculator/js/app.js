

/*
The <-- button must clear the last number in the string. 
The CE button clears the entire string
The CA Button clears the running total var.

*/


//variable to store keypad number entries. Must be cleared after pressing equal button. 
var num = '';
var runningTotalInt = 0;
var runningTotalStr = '';

//print to screen
output = document.querySelector('#screen');
console.log('output');
console.dir(output);

//variable to add an event listener to each number button
var keyboard = document
    .querySelector('#keyboard')
    .addEventListener("click", inputNum, false);


//this fuction concatinates the numbers as they are entered.
function inputNum(evt){
    console.dir(evt);
    console.log('inputNum()');
    //have one event on the parent that listens to all the children. The if statement stops the even firing if the parent element is clicked. 
    //From: https://www.kirupa.com/html5/handling_events_for_many_elements.htm
    if(evt.target !== evt.currentTarget){
    num += evt.target.value;
    console.log('num in inputNum(): '+num);

    output.value = num;
  }
  //method to stop the event firing once it reaches the parent element
  evt.stopPropagation();
}



equals = document.querySelector('#equals').addEventListener('click', compute, false);

function compute(evt){
    console.dir(evt);
    console.log('compute()');
    console.log('num in add()'+num);
    // console.dir(evt);
    
    //find the value of the string as integers
    var numInt = eval(num);
    //concatinate the num Str value onto the end of running total string variable
    runningTotalStr += num;
    //use .eval to find the value of the numbers entered as integers.
    runningTotalInt = eval(runningTotalStr);
    
    //reset the string num value to blank
    num = '';
    output.value = runningTotalInt;
    console.log('runningTotalInt: '+runningTotalInt);
    console.log('runningTotalStr: '+runningTotalStr);
}

backspace = document.querySelector('#backspace').addEventListener('click', backspaceFun, false);

function backspaceFun(){  
    num = num.substring(0, num.length -1);
    output.value = num;
    console.log('num in backspaceFun: '+num);
}

clearNum = document.querySelector('#clearNum').addEventListener('click', clearNumFun, false);

function clearNumFun(){
    num = '';
    output.value = num;
}

