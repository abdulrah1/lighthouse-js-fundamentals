/*
// Using While Loop the label wants the artist to repeat chorus 10x at the end of the song
const chorus="Let's dance!"
// The repeat variable is so that the code does not run forever!
let repeat=0;
// When repeat reaches 10, the While condition is no longer True; Thus, JS stops
while(repeat<10){
  console.log(chorus);
  repeat++;
}

console.log("Until the sun comes up!")
*/

const chorus="Let's dance!"
let repeat=0

while(repeat<10){
  if (repeat===5){
    console.log("Let's fuck!")
  }
  console.log(chorus)
  repeat=repeat+1;
}