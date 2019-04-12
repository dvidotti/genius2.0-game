let userPoints = 0;
const notes = ['c', 'e', 'g', 'a'];
let counter = 0;
let random4 = () => Math.round(Math.random() * 3);
let melodyTry = [];
let newMel = [];
let playButton = document.querySelectorAll('.btn');
let game = document.getElementById('show-game');
game.style.display ='none';

function startGame() {
  playButton.forEach(e => {
    e.classList.remove('red');
    e.classList.remove('yellow');
    e.classList.remove('blue');
    e.classList.remove('green');
   })
  game.style.display = 'block'; 
  picSamplers();
  playMelody();
}

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

function playNote(note) { console.log(note);
  lightButton(note);
  melodyTry.push(note);
  const noteAudio = new Audio(`${note}.mp3`);
  noteAudio.play();
  noteAudio.addEventListener('ended', () => {
    compareMelodies();
  });
}


function picSamplers(){
  if (counter <= 3){
   for (let i = 0; i < 3; i += 1) {
     newMel.push(notes[random4()]);
    } 
} if (counter > 3 &&  counter <= 5){
    for (let i = 0; i < 5; i += 1) {
     newMel.push(notes[random4()]);
    }
 } if (counter > 5){
    for (let i = 0; i < 7; i += 1) {
     newMel.push(notes[random4()]);
    }
 }
     
}


// cria as notas da melodia, usando a string (c, e, g, a), a cada loop pega a string da melodia newMel e push para audioSeq... dúvidas no segund 'for' Acho que o audioSeq[0] dispara a melodia, que por sua vez dispara as outras com o addEventeListener

function playMelody() {
  const audioSeq = [];
  for (let i = 0; i < newMel.length; i += 1) {
    const note = new Audio(`${newMel[i]}.mp3`);
    audioSeq.push(note);
  }
  for (let i = 0; i < audioSeq.length; i += 1) {
    if (i < audioSeq.length - 1) {
      audioSeq[i].addEventListener('ended', () => {

        audioSeq[i + 1].play();
        if (userPoints < 2){
        if (audioSeq[i + 1].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/c.mp3'){ 
          playButton[0].classList.add('red')
          setTimeout(() => {  
            playButton[0].classList.remove('red')
          }, 500); 
        } else if (audioSeq[i + 1].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/e.mp3'){
          playButton[1].classList.add('yellow')
          setTimeout(() => {  
            playButton[1].classList.remove('yellow')
          }, 500); 
        } else if (audioSeq[i + 1].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/g.mp3'){
          playButton[2].classList.add('blue')
          setTimeout(() => {  
          playButton[2].classList.remove('blue')
          }, 500); 
        } else if (audioSeq[i + 1].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/a.mp3'){
          playButton[3].classList.add('green')
          setTimeout(() => {  
          playButton[3].classList.remove('green')
          }, 500); 
        }
      } 
      });
    }
  }


  audioSeq[0].play();
   if (userPoints < 2){
    if (audioSeq[0].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/c.mp3'){ 
      playButton[0].classList.add('red')
      setTimeout(() => {  
        playButton[0].classList.remove('red')
      }, 500); 
    } else if (audioSeq[0].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/e.mp3'){
      playButton[1].classList.add('yellow')
      setTimeout(() => {  
        playButton[1].classList.remove('yellow')
      }, 500); 
    } else if (audioSeq[0].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/g.mp3'){
      playButton[2].classList.add('blue')
      setTimeout(() => {  
      playButton[2].classList.remove('blue')
      }, 500); 
    } else if (audioSeq[0].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/a.mp3'){
      playButton[3].classList.add('green')
      setTimeout(() => {  
      playButton[3].classList.remove('green')
      }, 500); 
    }
  }
}





function compareMelodies(){
  console.log(newMel, melodyTry);
  if (newMel.length === melodyTry.length){
   for (let i = 0; i < newMel.length; i += 1)
      if (newMel[i] !== melodyTry[i]) {
       console.log(`GAME OVER`)
    } if (newMel.length === melodyTry.length){ 
      counter += 1;
      userPoints += 1;
      newMel = [];
      melodyTry = []; 
      picSamplers();
      setTimeout(playMelody,1000);  
     // playMelody();
    } //return console.log(counter) ;
 }
}

