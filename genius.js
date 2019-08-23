// Global Variables
let userPoints = 0;
const notes = ['c', 'e', 'g', 'a'];
let random4 = () => Math.round(Math.random() * 3);
let melodyTry = [];
let newMel = [];
let playButton = document.querySelectorAll('.btn');
let redBtn = document.querySelector('.red');
let yellowBtn = document.querySelector('.yellow');
let blueBtn = document.querySelector('.blue');
let greenBtn = document.querySelector('.green');
let game = document.getElementById('show-game');
let startButton = document.getElementById('start-game');
let gameFinish = false;
let youWin = document.getElementById('you-win');
let gameOver = document.getElementById('game-over');

// Initial Elements Style
game.style.display ='flex';
gameOver.style.display ='none';
youWin.style.display ='none';
redBtn.classList.remove('red');
yellowBtn.classList.remove('yellow');
blueBtn.classList.remove('blue');
greenBtn.classList.remove('green');


// Start the game
function startGame() {
  startButton.style.display = 'none';
  game.style.display = 'flex'; 
  gameOver.style.display = 'none';
  youWin.style.display = 'none';
  gameFinish = false;
  playButton.forEach(e => {
    e.classList.remove('red');
    e.classList.remove('yellow');
    e.classList.remove('blue');
    e.classList.remove('green');
   })
  picSamplers();
  playMelody(); 
}

// Change buttons opacity while cliking
function lightButton(z) {
  for ( let i = 0; i < playButton.length; i += 1){ 
    if (z === 'c'){ 
      playButton[0].classList.add('red')
      setTimeout(() => {  
        playButton[0].classList.remove('red')
      }, 500); 
    } else if (z === 'e'){
        playButton[1].classList.add('yellow')
        setTimeout(() => {  
          playButton[1].classList.remove('yellow')
        }, 500); 
    } else if (z === 'g'){
        playButton[2].classList.add('blue')
        setTimeout(() => {  
        playButton[2].classList.remove('blue')
        }, 500); 
    } else if (z === 'a'){
        playButton[3].classList.add('green')
        setTimeout(() => {  
        playButton[3].classList.remove('green')
        }, 500); 
    } 
  }
}

// Answer the call from the button and play the note
function playNote(note) {
  if (newMel.length > 2) {
    lightButton(note);
    melodyTry.push(note);
    const noteAudio = new Audio(`${note}.mp3`);
    noteAudio.play();
    noteAudio.addEventListener('ended', () => {
    compareMelodies();
    });
  }
}


// Create random melodies & control game levels
function picSamplers(){
  if (gameFinish === false) {
    if (userPoints <= 2) {
      for (let i = 0; i < 3; i += 1) {
       newMel.push(notes[random4()]);
      } 
    } else if (userPoints > 2 &&  userPoints <= 4) {
        for (let i = 0; i < 5; i += 1) {
          newMel.push(notes[random4()]);
        }
    } else if (userPoints >= 5 && userPoints <= 6) {
        for (let i = 0; i < 7; i += 1) {
          newMel.push(notes[random4()]);
        }
    } else if (userPoints >= 7 && userPoints < 9) {
        for (let i = 0; i < 3; i += 1) {
          newMel.push(notes[random4()]);
       } 
    } else if (userPoints === 9) {
        melodyTry = [];
        newMel = [];
        userPoints = 0;
        gameFinish === true;
        youWin.style.display = 'flex';
        return;
      }
  }
}

 // Play random melodie & Give opactiy to the keys while playing
function playMelody() { 
  if (gameFinish === false) {
    const audioSeq = [];
    newMel.forEach ((e, idx) => {
      const note = new Audio(`${newMel[idx]}.mp3`);
      audioSeq.push(note);
    }) 


    // --- add end eventListener on each audio object of the audioSeq Melody; they are trigged by the end of the last melody note and also change the key class (opacity)--- //

    for (let i = 0; i < audioSeq.length - 1; i += 1) { 
      audioSeq[i].addEventListener('ended', () => { audioSeq[i + 1].play();
        if (userPoints <= 7) { // => Don't let key opacity changes in last round
          switch (audioSeq[i + 1].src) {
            case 'https://dvidotti.github.io/genius2.0-game/c.mp3':
               playButton[0].classList.add('red')
               setTimeout(() => { playButton[0].classList.remove('red')}, 500); 
               break;
            case 'https://dvidotti.github.io/genius2.0-game/e.mp3':
               playButton[1].classList.add('yellow')
               setTimeout(() => { playButton[1].classList.remove('yellow')}, 500); 
               break;
            case 'https://dvidotti.github.io/genius2.0-game/g.mp3':
               playButton[2].classList.add('blue')
               setTimeout(() => { playButton[2].classList.remove('blue')}, 500); 
               break;
            case 'https://dvidotti.github.io/genius2.0-game/a.mp3':
               playButton[3].classList.add('green')
               setTimeout(() => { playButton[3].classList.remove('green')}, 500); 
               break;
            default: 
              console.log("Wrong Logic")
          }
        } 
      });
    }
    
    if (audioSeq.length !== 0) {
      audioSeq[0].play();
      console.log(audioSeq.src);
      if (userPoints <= 7) {
        switch (audioSeq[0].src) {
          case 'https://dvidotti.github.io/genius2.0-game/c.mp3':
            playButton[0].classList.add('red')
            setTimeout(() => { playButton[0].classList.remove('red')}, 500); 
            break;
          case 'https://dvidotti.github.io/genius2.0-game/e.mp3':
            playButton[1].classList.add('yellow')
            setTimeout(() => { playButton[1].classList.remove('yellow')}, 500); 
            break;
          case 'https://dvidotti.github.io/genius2.0-game/g.mp3':
            playButton[2].classList.add('blue')
            setTimeout(() => { playButton[2].classList.remove('blue')}, 500); 
            break;
          case 'https://dvidotti.github.io/genius2.0-game/a.mp3':
            playButton[3].classList.add('green')
            setTimeout(() => { playButton[3].classList.remove('green')}, 500); 
            break;
          default: 
            console.log("Wrong Logic")
        }
      }
    }
  }
}


// Compare Melodies & Condition for game over
function compareMelodies() {
  if(gameFinish === false) {
    if (newMel.length === melodyTry.length) {
      if (JSON.stringify(newMel) !== JSON.stringify(melodyTry)) {
        gameFinish = true;
        newMel = [];
        melodyTry = [];
        userPoints = 0;
        gameOver.style.display = 'flex';
      } else if (JSON.stringify(newMel) === JSON.stringify(melodyTry)){ 
        if (userPoints === 9) {
          gameFinish = true;
          return;
        } else {
          userPoints += 1;
          newMel = [];
          melodyTry = []; 
          picSamplers();
          setTimeout(playMelody,1000);  
        }
      } 
    }
  }
}


