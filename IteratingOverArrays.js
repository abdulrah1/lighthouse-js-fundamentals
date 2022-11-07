// we'll need to write a script that prints out the ingredients for us. To spice things up a bit, we'll print the ingredients both in order and in reverse order.


const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// While loop that prints content of ingredients:

let i=0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}


// Write a for loop that prints out the contents of ingredients:


for (i=0; i <ingredients.length; i++) {
  console.log(ingredients[i])
}



// Write any loop (while or for) that prints out the contents of ingredients backwards:


for (i=ingredients.length; i >= 0; i--) {
  console.log(ingredients[i])
}