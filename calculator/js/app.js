

//If the first character of an identifier is numeric, you’ll need to escape it based on its Unicode code point. For example, the code point for the character 1 is U+0031, so you would escape it as \000031 or \31 

//Basically, to escape any numeric character, just prefix it with \3 and append a space character ( ). Yay Unicode!.

//From: http://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers

//number variables tied to html buttons
var zero  = document.querySelector('#\\30');
var one   = document.querySelector('#\\31');
var two   = document.querySelector('#\\32');
var three = document.querySelector('#\\33');
var four  = document.querySelector('#\\34');
var five  = document.querySelector('#\\35');
var six   = document.querySelector('#\\36');
var seven = document.querySelector('#\\37');
var eight = document.querySelector('#\\38');
var nine  = document.querySelector('#\\39');

//misc buttons
var decimal = document.querySelector('#decimal');


//operator variables
var add = document.querySelector('#add');
var negative = document.querySelector('#subtract');
var equals = document.querySelector('#equals');


//variable to store keypad number entries. Must be cleared after pressing operator button
var num = '';
var runningTotal = 0;

//From: http://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
zero.addEventListener('click', inputNum, false);
zero.stringValue = '0';

one.addEventListener('click', inputNum, false);
one.stringValue = '1';

two.addEventListener('click', inputNum, false);
two.stringValue = '2';

three.addEventListener('click', inputNum, false);
three.stringValue = '3';

four.addEventListener('click', inputNum, false);
four.stringValue = '4';

five.addEventListener('click', inputNum, false);
five.stringValue = '5';

six.addEventListener('click', inputNum, false);
six.stringValue = '6';

seven.addEventListener('click', inputNum, false);
seven.stringValue = '7';

eight.addEventListener('click', inputNum, false);
eight.stringValue = '8';

nine.addEventListener('click', inputNum, false);
nine.stringValue = '9';

decimal.addEventListener('click', inputNum, false);
decimal.stringValue = '.';

add.addEventListener('click', inputNum, false);
add.stringValue = '+';

equals.addEventListener('click', compute, false);

// var a = '2';
// var b = parseFloat(a);
// console.log('b: '+b);
// console.log(typeof b);

var a = '56-34+3'
var b = a[2];
console.log(typeof b);

//from: http://stackoverflow.com/questions/13077923/how-can-i-convert-a-string-into-a-math-operator-in-javascript
var math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y }
}
console.log(math_it_up);
console.log(math_it_up['+'](1, 2));

//alternatively use .eval
//The eval function takes a string and then returns the value of that string considered as a math operation. For example,
console.log('.evalTest');
console.log(eval("3 *4"));

function inputNum(evt)
{
  // window.alert( evt.target.stringValue );
  // console.log(evt);
  //use this fuction to concatinate the numbers as they are entered. It might be easier if they are strings before any calculations are performed so that they concatinate as strings rather than be added together.
  num += evt.target.stringValue;
  console.log(num);
}

function compute(evt){
    console.log('add()');
    console.log('add.stringValue: '+evt.target.stringValue);
    console.log('num in add()'+num);
    
    runningTotal += num;
    num = '';
    console.log('eval(runningTotal)');
    console.log(eval(runningTotal));
    console.log('num: '+num);

}

