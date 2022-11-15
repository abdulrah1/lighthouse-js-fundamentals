let listNum;



// Loop from 100 to 200:
for (i = 100; i <= 200; i++) {

  // Let listNum = the current step in the loop
  listNum = i;
  let output = '';

  //if listNum is a multiple of 3 AND 4
  if ((listNum % 3 === 0) && (listNum % 4 === 0)) {
    output += 'LoopyLighthouse';

    // if listNum is a multiple of 3
  } if (listNum % 3 === 0) {
    output += 'Loopy';

    // if listNum is a multiple of 4
  } if (listNum % 4 === 0) {
    output += 'Lighthouse';
  }
  // print the listNum
  console.log(output === '' ? listNum : output)
}
