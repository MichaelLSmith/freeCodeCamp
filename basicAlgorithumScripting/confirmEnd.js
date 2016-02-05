function end(str, target) {
    
    var s = str.length -1; //s = index of last char of str
    var result = false;
    
   
    for (var t = target.length -1; t >= 0; t--){
        if(target[t] === str[s]){ //if the char of both str and target at index t match
            s -= 1;//decrease str index
            result = true;
        }
        else { return false } //if the last two chars don't match, return false and end program.
    }

    if (result === true) { return true }
            
    else { return false }

}
console.log(end("He has to give me a new name", "me") );