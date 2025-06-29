let inputEnterLetter = document.querySelector(".enter-letter");
let divButtonSearch = document.querySelector(".button-search");
let buttonDeleteWord = document.createElement("button");
let imageDeleteWord = document.createElement("img");

imageDeleteWord.src = "../assets/images/icono-delete.svg";
imageDeleteWord.classList = "rounded-full";
buttonDeleteWord.classList = "pl-1 rounded-full";
buttonDeleteWord.appendChild(imageDeleteWord);

inputEnterLetter.addEventListener("input", () => {
  if (inputEnterLetter.value.length > 0) {
    if (!divButtonSearch.contains(buttonDeleteWord)) {
      divButtonSearch.appendChild(buttonDeleteWord);
    }
  } else {
    if (divButtonSearch.contains(buttonDeleteWord)) {
      divButtonSearch.removeChild(buttonDeleteWord);
    }
  }
});

buttonDeleteWord.addEventListener("click", () => {
  inputEnterLetter.value = "";
  if (divButtonSearch.contains(buttonDeleteWord)) {
    divButtonSearch.removeChild(buttonDeleteWord);
  }
  inputEnterLetter.focus();
})

const carousel = document.getElementById('carousel')
const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')

let currentIndex = 0
const totalSlides = 6 // Cambia si agregas más imágenes

// Mover el carrusel al índice actual
function updateCarousel() {
  const translatePercentage = -(100 * currentIndex)
  carousel.style.transform = `translateX(${translatePercentage}%)`
}

// Botón derecha
arrowRight.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++
    updateCarousel()
  }
})

// Botón izquierda
arrowLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    updateCarousel()
  }
})