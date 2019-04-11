let userPoints = 0;
const notes = ['c', 'e', 'g', 'a'];
let random4 = () => Math.round(Math.random() * 3);
let melodyTry = [];
let newMel = [];
let showMelody = document.getElementById('show-melody');
let game = document.getElementById('show-game');
game.style.display ='none';

function startGame() {
  game.style.display = 'block';
  picSamplers();
  playMelody();
}

function playNote(note) {
  melodyTry.push(note);
  const noteAudio = new Audio(`${note}.mp3`);
  noteAudio.play();
  noteAudio.addEventListener('ended', () => {
    compareMelodies();
  });
}

function picSamplers() {
  for (let i = 0; i < 3; i += 1) {
    newMel.push(notes[random4()]);
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
      });
    }
  }
  audioSeq[0].play();
}

let counter = 0;
function compareMelodies(){
  console.log(newMel, melodyTry);
  if (newMel.length === melodyTry.length){
   for (let i = 0; i < newMel.length; i += 1)
      if (newMel[i] !== melodyTry[i]) {
       console.log(`GAME OVER`)
    } if (newMel.length === melodyTry.length){ 
      counter += 1;
      newMel = [];
      melodyTry = []; 
      picSamplers();
      playMelody();
    } //return console.log(counter) ;
 }
}

