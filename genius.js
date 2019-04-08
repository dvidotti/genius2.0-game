// Samplers here are numbers that represent later sound objects
let samplers = [ 1, 2, 3, 4];

// Choose a number between 0 to 3, will be related to the index of samplers
let random4 = () => Math.round(Math.random() * 3);

// Build an Array with 3 random elements of samplers array
function pic3Samplers() {
  let newMel3 = [];
  for ( let i = 0; i < 3; i += 1){
    newMel3.push(samplers[random4()]);
  }
  return newMel3;
}

// Asign new variable store melody built by function pic3Samplers
let melody = pic3Samplers(samplers);

// User shoot on trying to guess the melody (this info will be given by the USER)
let userLevel1 = [2, 1, 3];

// Compare melodies created by random function with User guess info
let compareMelodies = function () {
  if ( JSON.stringify(melody) === JSON.stringify(userLevel1)) {
    return true;
  } else { 
    return false;
  }
}
//console.log(compareMelodies(samplers));

// Function that continue or end the game 
function levelOne (){
  let rightShoot = 0;
  if (compareMelodies() === true) {
    rightShoot += 1;
    return 'You are good';
  //} else if ( rightShoot < 10) {
    //melody()
 // } else if ( rightShoot >= 10) {
  //  levelTwo()
  } else return 'Game Over'
    
  }
//}

console.log(levelOne());

