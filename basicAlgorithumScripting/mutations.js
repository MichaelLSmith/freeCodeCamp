function mutation(arr) {
    
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    
    for(var c = 0; c < arr[1].length; c++){
        
        console.log('first arr letter: '+arr[0][c]);
        console.log('second arr letter: '+arr[1][c]);
        console.log('index of: '+arr[0].indexOf(arr[1][c]));
        
        
        if ( arr[0].indexOf(arr[1][c]) === -1 ){ return false; }
    }
    console.log('true');
     return true;
}

// mutation(["hello", "hey"]);//false
// mutation(['Alien', 'line']);//true
// mutation(["floor", "for"]);// should return true.
console.log(mutation(["hello", "Hello"]));
