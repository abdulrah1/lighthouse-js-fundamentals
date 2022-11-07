const amounts = [61, 52.25, 112.99, 5];

let total=0;

/*
// To use a For Loop:
for (i=0; i < amounts.length; i++) {
  total += amounts[i]; // >> total = 
}

console.log('Your total amount is ', + total);
// Print out: Your total amount is 231.24




// For...of Loops are simpler


for (let amount of amounts) {
  total += amount;
}

console.log('Your total amount is ', + total);

*/



// For...Of loop is useful if we're going from the start to end of an array! if need to go thru array (e.g., backwards, skipping every other element), then For Loop is better!

let data = ['afgunz','fenix','karetrix', 'all hate'];

for (let val of data) {
  if(val==='afgunz') {
    console.log(`${val} got a 9 incherrr`)
  } else if (val==='fenix') {
    console.log(`${val} is a WHORE!!!`)
  } else if (val==='karetrix') {
    console.log(`${val} is going to fuck Vivian soon, iA!!!`)
  } else {
    console.log(`${val} is the biggest hater!`)
  }
}