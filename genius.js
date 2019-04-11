let userPoints = 0;
let notaDo = new Audio ('do.mp3');
let notaMi = new Audio ('mi.mp3');
let notaSol = new Audio ('sol.mp3');
let notaLa = new Audio ("la.mp3");
let notesArray = [notaDo, notaMi, notaSol, notaLa];
let random4 = () => Math.round(Math.random() * 3);
let melodyTry = [];
let newMel = [];
let showMelody = document.getElementById('show-melody');
let game = document.getElementById('show-game');
game.style.display ='none';

function startGame() {
  game.style.display = 'block';
  picSamplers();
}

// Funções que tocam a nota ativadas no botão

function playNotaDo() {
  melodyTry.push(notaDo)
  notaDo.play();
  notaDo.addEventListener('ended', () => {
    compareMelodies();
  });
  console.log(counter)
  // levels();
}

function playNotaMi() {
  console.log('vai tocar a nota mi', melodyTry)
  melodyTry.push(notaMi)
  notaMi.play();
  notaMi.addEventListener('ended', () => {
    compareMelodies();
  });
  console.log(counter)
  // levels();
}

function playNotaSol() {
  melodyTry.push(notaSol)
  notaSol.play();
  notaSol.addEventListener('ended', () => {
    compareMelodies();
  });
  console.log(counter)
  // levels();
}

function playNotaLa() {
  melodyTry.push(notaLa)
  notaLa.play();
  notaLa.addEventListener('ended', () => {
    compareMelodies();
  });
  console.log(counter)
  // levels();
}


function playMelody(x) {
  let music = x.slice();
  if (music.length > 0) {
    music[0].addEventListener(`ended`, (e) => {
      music.splice(0, 1);
      playMelody(music);
    })
    music[0].play();
  }
}


// // Build melody with 3 random elements and show it on the DOM
function picSamplers() {
  //  if (userPoints < 3){
    for ( let i = 0; i < 3  ; i += 1) {
      newMel.push(notesArray[Math.round(Math.random() * 3)]);
    } 
    playMelody(newMel);
    //return newMel; 
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
              
              
              //Compare melodies created by random function with User guess info
              
              let counter = 0;
              function compareMelodies() {
                console.log('melodyTry', melodyTry);
                for (let i = 0; i < melodyTry.length; i += 1) {
                  if (melodyTry[i].src.toString() === newMel[i].src.toString()) {
                    counter += 1;
                  } else {
                    console.log(`GAME OVER`)
                  }
                }
              }

              function levels() {
                if (counter === 3) {
                  userPoints += 1;
                  //melodyTry = [];
                  //newMel = [];
                  console.log(`levels`)
                  // return picSamplers();
                }
              }
                // if (counter < newMel.length) {
                //   for (let i = 0; i < melodyTry.length; i += 1) {
                //     if (melodyTry[i].src !== newMel[i].src) {
                //       return console.log('GAME OVER')
                //     }
                //   }
                // }
                // if (counter === newMel.length) {
                //   userPoints += 1;
                //   melodyTry = [];
                //   newMel = [];
                //   counter = 0;
                //   picSamplers();
                //   return console.log('YOU WIN')
                //   }
                //   return counter += 1
                  
                
                
                
                
                
                
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