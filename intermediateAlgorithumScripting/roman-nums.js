var roman_nums = 
{
    1:'I',
    2:'II',
    3:'III',
    4:'IV',
    5:'V',
    6:'VI',
    7:'VII',
    8:'VIII',
    9:'IX',
    10:'X',
    100:'C',
    500:'D',
    1000:'M'
};
//turn keys into strings to match conversion of num into string.

function numToRom(num)
{
    //num = 2
    //the function needs to know to get 2, it needs to add 1 and 1. And then from this concat I + I;

    //2 is greater than 1 but less than 4, therefore it is based on 1.

    //if num = 1 --> c = 0;
    //if num = 2 --> c = 1;
    //if num = 3 --> c = 2;

    //if num = 4 --> c = -1;
    //if num = 5 --> c = 0;
    //if num = 6 --? c = 1;
    //if num = 7 --> c = 2;
    //if num = 8 --> c = 3;

    //if num = 9 --> c = -1; (this could be -2 to differenciate it from 4??)


    //c value is know.

    //needs to be num for the > to work, can't be string.
    if (num < 4) {
        //than concate I, X or C
        //set var base of I,X,or C based on length of str.
        
    }
    if (num > 3 && num < 9) {
    }

    //if num < 4 it is based on 1
    //if num > 3 and < 9 it is based on 5

    //if num < 40 it is based on 10
    //if num > 39 < 89 it is based on 50.

    //num = 11
    var str = num.toString();

    //str = '11';
    var len = str.length;

    for (var i = 0; i < len; i++) {
        str.charAt[i];// 1 and 1
        //if len = 1 then dealing with nums 1-9
        //if len = 2, then dealing with 10s
        //if len = 3, then dealing with 100s
        //if len = 4, then dealing with 1000s.

    }

}


// num = 9 - 1