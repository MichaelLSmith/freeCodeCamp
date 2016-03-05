var roman_nums = 
{
    length: { 
        1: { '1':'I','4':'IV','5':'V','9':'IX' }, 
        2: { '1':'X','4':'XL','5':'L','9':'XC' }, 
        3: { '1':'C','4':'CD','5':'D','9':'CM' }, 
        4: {'1':'M'} 
    }
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
    var base_num; //number based on individual number of original.   
                  //used to convert single num into num used to look up base symbol (saved as var base)
    var str_num; // single num to check --> converted to num from str value from orig num.
                // Used to control how many times base symbol is concatinated in second for loop.
    
    var rom = '';

    //num = 4
    //str = '4' string type
    //sym_tier = 1 - number type

        for (var i = 0; i < str.length; i++) {
        console.log('index: '+i);
        console.log('sym_tier: '+sym_tier);
        str_num = +str[i]; //num of times to loop (need to figure out how to account for 4,9)
        //move 9 into next level since it's based on the next base symbol.
        console.log('str_num: '+str_num);

        base_num = add_val[str_num];

        console.log('base_num: '+base_num);
        
        if (str_num !== 0){
            console.log('in str_num if');
            base = str_num - base_num;
            console.log('base: '+base);
            base = roman_nums.length[sym_tier][base];
            console.log('base after lookup: '+base);
            rom += base;
            console.log('rom in first if: '+rom);
        }
        
        for (var c = 0; c < base_num; c++){
            if (str_num > 5 && str_num < 9){
                base = roman_nums.length[sym_tier][base_num];
                rom += base;
                console.log('rom in if: '+rom);
            }
            else { rom += base; }
            console.log('c in 2nd for loop: '+c);
        }
        console.log('rom at end of first for: '+rom);
        sym_tier -= 1;
    }
}

convert(66);