function playsound(e){

    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('play');
};
window.addEventListener('keydown',playsound);



function removeTransition(e) {
  // console.log(e);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('play');
  }
  
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('transitioncancel', removeTransition));
