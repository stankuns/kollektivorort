// image carousel 
let archImages = ['./img/architektur7.jpg', './img/architektur8.jpg', './img/architektur9.jpg'];

let index = 0;
const imgElement = document.querySelector('#architekturPhoto');

function change() {
   imgElement.src = archImages[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 1500);
};


// menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})





// wir
function displayLiAngelika() {
  document.querySelector('.team__angelika').style.display = 'block'
}

function dontDisplayLiAngelika() {
  document.querySelector('.team__angelika').style.display = 'none'
}

function displayLiAndrea() {
  document.querySelector('.team__andrea').style.display = 'block'
}

function dontDisplayLiAndrea() {
  document.querySelector('.team__andrea').style.display = 'none'
}

function displayLiRichard() {
  document.querySelector('.team__richard').style.display = 'block'
}

function dontDisplayLiRichard() {
  document.querySelector('.team__richard').style.display = 'none'
}

