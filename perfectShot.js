// the finalPosition function receives an array of moves:
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


// By looking at the path that the parade moves in, your function should calculate and then return an array representing the position of the parade after completing all of the moves. 
// The first element of the array should be the X position, and the second element of the array should be the Y position. The parade begins at [0,0].

const finalPosition = function (moves) {
  let x=0;
  let y=0;

  for (let i=0; i < moves.length; i++){
    if (moves[i]=== 'north') {
      y++;
    } else if (moves[i] ==='south') {
      y--;
    } else if (moves[i]==='west') {
      x--;
    } else if (moves[i] === 'east') {
      x++;
    }
  }
  return [x,y];
}




console.log(finalPosition(moves))