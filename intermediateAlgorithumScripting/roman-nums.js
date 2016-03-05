var roman_nums = 
{
    length: { 
        1: { '1':'I','4':'IV','5':'V','9':'IX' }, 
        2: { '1':'X','4':'XL','5':'L','9':'XC' }, 
        3: { '1':'C','4':'CD','5':'D','9':'CM' }, 
        4: {'1':'M'} 
    }//need to account for 2 symbol numbers using different symbols like 4,6,7,8,9
};

var add_val =
{
    1:0,
    2:1,
    3:2,
    4:0,
    5:0,
    6:1,
    7:2,
    8:3,
    9:0
};

function convert(num)
{
    console.log(num);
    var str = num.toString();
    var sym_tier = str.length;
    var base; //what symbol to concatinate.
    var str_num; //single num to check --> converted to num from str value from orig num.
                 //Used to control how many times base symbol is concatinated in second for loop.
    
    var base_num;//number from add_val obj
                 //subtracted from str_num to set base numerical value, which is used to look up base symbol.   
                 
    
    var rom = '';
    //6 --> VI
    //num = 6
    //str = '6' string type
    //sym_tier = 1 - number type

    //first sym - base = v
    //second sym - base is = I (should be seen as 1)


        for (var i = 0; i < str.length; i++) {
        console.log('INDEX: '+i);
        console.log('sym_tier: '+sym_tier);
        str_num = +str[i]; 
        console.log('str_num: '+str_num);
        base_num = add_val[str_num];
        console.log('base_num: '+base_num);
        
        if (str_num !== 0){ //for all str_nums other than 0. 0 is skipped. Works for all first symbols, doesn't work for single number with two symbols like 4,6 etc...
            console.log('in str_num first if');
            base = str_num - base_num;//set base lookup 
            console.log('base after subtraction: '+base);
            base = roman_nums.length[sym_tier][base];
            console.log('base after lookup: '+base);
            rom += base;
            console.log('rom in first if: '+rom);
        }
        
        for (var c = 0; c < base_num; c++){
            console.log('second for loop start');
            console.log('C IN 2ND FOR: '+c);
            console.log('str_num in for before if: '+str_num);
            if (str_num > 5 && str_num < 9){
                //add make the base_num equal what number it takes to have 6=1,7=2,8=3
                console.log('second for if');
                var base = str_num - (str_num - 1);// 8-7 = 1, 7-6 = 1, 6-5, 
                // console.log('adj_base_num: ' +adj_base_num);
                console.log('base_num: '+base_num);
                console.log('str_num: '+str_num)
                // base = str_num - adj_base_num;
                console.log('base after subtraction: '+base);
                base = roman_nums.length[sym_tier][base];
                console.log('base after lookup: '+base);
                rom += base;
                console.log('rom in if: '+rom);
            }
            else { rom += base; }
        }
        console.log('rom at end of first for: '+rom);
        sym_tier -= 1;
    }
return rom;
}

convert(68);