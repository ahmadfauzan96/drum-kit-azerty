//Détection des appuis sur les boutons

for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {

  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    //Que faire lorsqu'un clic est détecté.
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

//Détection des appuis sur le clavier

  document.addEventListener('keydown', function() {
    //Que faire lorsqu'une touche est enfoncée.
    makeSound(event.key);
    buttonAnimation(event.key);
  });

//Fonction pour créer des sons de batterie

  function makeSound(key) {
    switch (key) {
      case 'z':
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
      break;

      case 'q':
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
      break;

      case 's':
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
      break;

      case 'd':
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
      break;

      case 'j':
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
      break;

      case 'k':
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
      break;

      case 'l':
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
      break;

      default: console.log('buttonInnerHTML');

    }
  }

//Fonction pour animer les images de tambour

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100); //100 millisecondes === 0.1 secondes
}
