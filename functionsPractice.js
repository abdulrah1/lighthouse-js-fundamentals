

/*

function findAverage(x,y) {
  var answer = (x+y)/2;
  return answer;
}

var avg = findAverage(5,9);

console.log(avg);


*/


/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 


// your code goes here
function laugh() {
  var laugh = 'hahahahahahahahahaha!';
  return laugh
}

console.log(laugh());

*/




/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs


var sound='';

function laugh (num) {
  for (var x=0; x < num; x++) {
    sound = sound + 'ha';
  }
  sound = sound + '!';
  return sound;
}

console.log(laugh(3))






function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);





// Using Return Values - storing function answers in another variable.

function add (x,y) {
  return x+y;
}

var sum = add(5,5); // this is where the answer is stored for add


function dividedByTwo(num) {
  return num/2;
}

var average = dividedByTwo(sum); // This is where the answer for dividedByTwo is stored.

console.log(average);

//////////////////////////////////////////////////////////////////


function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));


*/





// buildTriangle 
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */



function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}


function buildTriangle(length) {
  var triangle ='';

  var lineNumber =1;

  for (lineNumber =1; lineNumber <= length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

console.log(buildTriangle(10));