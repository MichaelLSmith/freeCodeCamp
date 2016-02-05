function truncate(str, num) {
  
  if(num >= str.length) { return str; }
  
  if( num <= 3 ){ num = (str.length - num); }
  else {
    //find the index position to perform the slice at by num from str.length and then
    //add 3 to it to account for the length of '...'.
    num = (str.length - num) + 3; }

    console.log('num in else: '+num);
    //convert the splice index to a negative number by subtracting it from it's 
    //doubled value.
    var i = (num) - ( (num) * 2);
    //indicate the starting position of the slice of index 0 and the negative
    //second index value to slice from the end.
    str = str.slice(0,i);
    str += '...';

  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);