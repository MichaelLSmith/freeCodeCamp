function booWho(bool){
    console.log('function start');
    console.log(bool);
    let test;

    if(bool === true || bool === false){
        console.log(bool);
        test = Boolean(true);
    }

    else {
        test = Boolean(false);
    }

    console.log(test);
}

booWho(false);
booWho(true);

/*Official solution from: Free Code Camp:
http://forum.freecodecamp.com/t/algorithm-boo-who/16000

*/
function booWho(bool) {
  return typeof bool === 'boolean';
}

// test here
booWho(null);

/*explaination of why this works:
an expression of comparison will print out a boolean value of true or false
*/
console.log(1 === 2); // false
console.log(1 === 1); // true
