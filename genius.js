let userPoints = 0;
let samplers = [ 1, 2, 3, 4];
let notaDo = new Audio ('do.mp3');
let notaMi = new Audio ('mi.mp3');
let notaSol = new Audio ('sol.mp3');
let notaLa = new Audio ("la.mp3");
let notesArray = [notaDo, notaMi, notaSol, notaLa];
let random4 = () => Math.round(Math.random() * 3);
let showMelody = document.getElementById('show-melody');
// let melody = picSamplers();   
let game = document.getElementById('show-game');
game.style.display ='none';

function startGame() {
  game.style.display = 'block';
  playMelody(picSamplers());
  // playMelody([notaDo, notaMi, notaSol]);
}

function playMelody(x) {
  let music = x;
  if (music.length > 0) {
    music[0].play();
    music[0].addEventListener(`ended`, (e) => {
      music.splice(0, 1);
      playMelody(music);
    })
  }
}

// function playMelody(x) {
//   x[0].play();
//   console.log(`x[0]`, x[0])
//   x[0].addEventListener('ended', (e) => { 
//     x[1].play();
//     console.log(`x[1]`, x[1]) });
//   x[1].addEventListener('ended', (e) => { 
//     x[2].play();
//     console.log(`x[2]`, x[2]) });
//   return false;
// }

// // Build melody with 3 random elements and show it on the DOM
function picSamplers() {
  let newMel = [];
  //  if (userPoints < 3){
    for ( let i = 0; i < 3; i += 1) {
      newMel.push(notesArray[Math.round(Math.random() * 3)]);
    } 
    return newMel
    //showMelody.innerHTML = `${newMel.join(' ')}`;
  //}
}

//    } else if (userPoints < 5){ 
//      for ( let i = 0; i < 4; i += 1){
//         newMel.push(notesArray[random4()]);
//       }
//         showMelody.innerHTML = `${newMel.join(' ')}`;
//         //return newMel;

//    } else if (userPoints < 7){ 
//     for ( let i = 0; i < 5; i += 1){
//        newMel.push(notesArray[random4()]);
//      }
//        showMelody.innerHTML = `${newMel.join(' ')}`;
//      //  return newMel;

//    } else if (userPoints < 8){ 
//     for ( let i = 0; i < 6; i += 1){
//        newMel.push(notesArray[random4()]);
//      }
//        showMelody.innerHTML = `${newMel.join(' ')}`;
//       // return newMel;
//    } else if (userPoints === 8)
//       // return "YOU WIN"; 
// }


// // Compare melodies created by random function with User guess info
// function compareMelodies() {
//   let userLevel1 = document.getElementById('user-shoot').value;
//   console.log(melody, userLevel1)
//   if (parseInt(melody.join('')) === parseInt(userLevel1)) { 
//      userPoints += 1;
//      console.log('batman',userPoints);
//    melody = picSamplers();  
//   } else { 
//     console.log('Game Over');
//   }
// }
