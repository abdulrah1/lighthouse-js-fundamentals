// isEven takes as its parameter a number and returns a Boolean value representing whether or not the number is EVEN


const isEven = function (num) {
  return num % 2 === 0;
}
/*
 const tenIsEven = isEven(10);
 const elevenIsEven = isEven(11);

 console.log(tenIsEven);
 console.log(elevenIsEven);
*/


 // To simplify the above code, we DO NOT HAVE TO set function return to a new variable - We can use them directly.

 console.log(isEven(10));
 console.log(isEven(11));