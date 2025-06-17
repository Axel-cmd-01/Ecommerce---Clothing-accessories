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