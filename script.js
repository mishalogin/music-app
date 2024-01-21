const pads = document.querySelectorAll('.pads div');
const sounds = document.querySelectorAll('audio');

for (let i = 0; i < pads.length; i += 1) {
    pads[i].addEventListener('click', playSound(i))
}

function playSound (item) {
    return function() {
    if (sounds[item].loop) {
        sounds[item].loop = false;
        sounds[item].pause();
    } else {
        sounds[item].currentTime = 0;
        sounds[item].loop = true;
        sounds[item].play();
    }    
  }
}