

//If the first character of an identifier is numeric, you’ll need to escape it based on its Unicode code point. For example, the code point for the character 1 is U+0031, so you would escape it as \000031 or \31 

//Basically, to escape any numeric character, just prefix it with \3 and append a space character ( ). Yay Unicode!.

//From: http://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
var '0' = document.querySelector('#\\30');
var '1' = document.querySelector('#\\31');
var '2' = document.querySelector('#\\32');
var '3' = document.querySelector('#\\33');
var '4' = document.querySelector('#\\34');
var '5' = document.querySelector('#\\35');
var '6' = document.querySelector('#\\36');
var '7' = document.querySelector('#\\37');
var '8' = document.querySelector('#\\38');
var '9' = document.querySelector('#\\39');

//From: http://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
someInput.addEventListener('click', myFunc, false);
someInput.myParam = 1;







console.log(someInput);








function myFunc(evt)
{
  // window.alert( evt.target.myParam );
  console.log(evt.target.myParam);
  //use this fuction to concatinate the numbers as they are entered. It might be easier if they are strings before any calculations are performed so that they concatinate as strings rather than be added together.
}