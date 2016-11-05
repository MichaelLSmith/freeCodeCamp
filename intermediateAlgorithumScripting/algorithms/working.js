// let searchArr = [0];
//
// for (let i = 0; i < 75; i++){
//     searchArr.push(searchArr[i] + 1 );
// }
// console.log(searchArr);

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

//search for 61

/*
User looks for a number
inputs it as an argumment
*/



function search(searchNum, searchArr){
    let length = searchArr.length,
        max = length - 1,
        min = 0;
        mid = Math.floor(length / 2);
        console.log(mid);

    //mid = 12
    console.log(searchArr[mid]);
    console.log(searchNum);
    while (searchArr[mid] < searchNum){
        console.log(searchArr[mid]);
        console.log(searchNum);
        if(max < min){
            return -1;
        }
        min = mid + 1;//min = 13
        console.log(min);
        //find the median of 13 - 24
        let med = (max - min) / 2;
        mid = Math.floor(med + min);
        console.log('med: '+ med);
        console.log('mid: '+ mid);
        console.log(mid);
        console.log(searchArr[mid]);

    }
    console.log(searchArr[mid]);
    return mid;

}

console.log(search(10, primes));

// var a = 10;
// var b = 0;
//
// while (b < a) {
//     b++;
//     console.log(b);
// }
