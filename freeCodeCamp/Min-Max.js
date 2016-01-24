function ourFunction(ourMin, ourMax) {
    
    var num1 = ourMax - ourMin;
    var num2 = num1 +1;
    var num3 = num2 + ourMin;
    
    console.log('num1: '+num1);
    console.log('num2: '+num2);
    console.log('num3: '+num3); 
    
    var random = Math.random();
    var rounded = random * num3;
    var result = Math.floor(rounded);

   console.log('random: '+random);
   console.log('rounded: '+rounded);
   console.log('result: '+result);
}

ourFunction(2, 16);