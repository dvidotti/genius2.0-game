let userPoints = 0;
let samplers = [ 1, 2, 3, 4];
let random4 = () => Math.round(Math.random() * 3);
let showMelody = document.getElementById('show-melody');
let melody = picSamplers();  
function startGame() {
  game.style.display = 'block';
}

// Samplers in numbers & and random 3 & showgame div
let game = document.getElementById('show-game');
game.style.display ='none';

// Build melody with 3 random elements and show it on the DOM
function picSamplers() {
  let newMel = [];
   if (userPoints < 3){
     for ( let i = 0; i < 3; i += 1){
       newMel.push(samplers[random4()]);
      }
       showMelody.innerHTML = `${newMel.join(' ')}`;
       return newMel;
      
   } else if (userPoints < 5){ 
     for ( let i = 0; i < 4; i += 1){
        newMel.push(samplers[random4()]);
      }
        showMelody.innerHTML = `${newMel.join(' ')}`;
        return newMel;

   } else if (userPoints < 7){ 
    for ( let i = 0; i < 5; i += 1){
       newMel.push(samplers[random4()]);
     }
       showMelody.innerHTML = `${newMel.join(' ')}`;
       return newMel;

   } else if (userPoints < 8){ 
    for ( let i = 0; i < 6; i += 1){
       newMel.push(samplers[random4()]);
     }
       showMelody.innerHTML = `${newMel.join(' ')}`;
       return newMel;
   } else if (userPoints === 8)
       return "YOU WIN"; 
}


// Compare melodies created by random function with User guess info
function compareMelodies() {
  let userLevel1 = document.getElementById('user-shoot').value;
  console.log(melody, userLevel1)
  if (parseInt(melody.join('')) === parseInt(userLevel1)) { 
     userPoints += 1;
     console.log('batman',userPoints);
   melody = picSamplers();  
  } else { 
    console.log('Game Over');
  }
}
