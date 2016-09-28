function sumAll(arr) {

    var max = Math.max.apply(null, arr); 
    var min = Math.min.apply(null, arr);
    var run = max - min;
    
    var sum = min;  //3
    var prev;//1
    var cur; //2
    
    for(var i = 1; i <= run; i++){
        if(i === 1){prev = min;//1
        }
        else prev = cur;
        
        cur = prev + 1; // 2
        
        console.log('index: ' + i);
        console.log('prev: '+prev);
        console.log('cur: '+cur);
        console.log('sum before add: '+sum);
        
        //sum prev and cur num
        sum += cur; //3
        
        console.log('final sum: '+ sum);
        
    }
    
    // return sum;
    
}

sumAll([5, 10]);