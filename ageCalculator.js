// In this challenge, we will write a function that determines someone's age, given their date of birth.

const ageCalculator = function (name, yearOfBirth, currentYear) {

// must define age by subtracting the yob from currentyear:
  let age = currentYear - yearOfBirth;

// the return statement is so that when it is plugged into console.log what format it should take.
  return name + ' is '+ age +' years old.'
  
}

console.log(ageCalculator("Suzie",1983, 2015));

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));


// >>> Prints: Suzie is 32 years old. >>> Miranda is 32 years old. >>>> Ferdinand is 27 years old.