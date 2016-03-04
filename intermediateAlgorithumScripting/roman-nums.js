var roman_nums = 
{
    1:'I',
    5:'V',
    10:'X',
    100:'C',
    500:'D',
    1000:'M'
}

function numToRom(num)
{
    //num = 2
    //the function needs to know to get 2, it needs to add 1 and 1. And then from this concat I + I;

    //2 is greater than 1 but less than 4, therefore it is based on 1.


    if (num < 4) {
        var c;
        // 3 - 2 = 1
        // 2 - 1 = 1
        // 1 is the base
        //keep subtracting 1 from num until you reach either 1
        if (num - 1 = 1) {
            c = 1;
        }
        else if (num - 2 = 1 )
    }
    if (num > 3 && num < 9) {
        //6 = 5 + 1
        //7 = 5 + 2
        //8 = 5 + 3

        //8 - 3 = 5
        //7 - 3 = 4
    }

    //if num < 4 it is based on 1
    //if num > 3 and < 9 it is based on 5

    //if num < 40 it is based on 10
    //if num > 39 < 89 it is based on 50.


}


// num = 9 - 1