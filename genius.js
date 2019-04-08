let userPoints = 0;
let samplers = [ 1, 2, 3, 4];
let random4 = () => Math.round(Math.random() * 3);
let showMelody = document.getElementById('show-melody');
let melody = pic3Samplers(samplers);  
function startGame() {
  game.style.display = 'block';
}

// Samplers in numbers & and random 3 & showgame div
let game = document.getElementById('show-game');
game.style.display ='none';

// Build melody with 3 random elements and show it on the DOM
function pic3Samplers(samplers) {
  let newMel3 = [];
  for ( let i = 0; i < 3; i += 1){
    newMel3.push(samplers[random4()]);
  }
  showMelody.innerHTML = `${newMel3.join(' ')}`;
  return newMel3;
}

// function to variable melody

// Compare melodies created by random function with User guess info
function compareMelodies() {
  let userLevel1 = document.getElementById('user-shoot').value;
  console.log(melody, userLevel1)
  if (parseInt(melody.join('')) === parseInt(userLevel1)) { 
     userPoints += 1;
     console.log('batman',userPoints);
     if (userPoints === 5){
     }
    melody = pic3Samplers(samplers);  
  } else { 
    console.log('Game Over');
  }
}
//console.log(compareMelodies());

// Function that continue or end the game 
//function levelOne (){
//   let rightShoot = 0;
//   if (compareMelodies() === true) {
//     rightShoot += 1;
//     return 'You are good';
//   //} else if ( rightShoot < 10) {
//     //melody()
//  // } else if ( rightShoot >= 10) {
//   //  levelTwo()
//   } else return 'Game Over'
    
//   }
//}

// console.log(levelOne());

