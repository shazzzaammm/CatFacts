let catFactLabel = document.querySelector(".fact-text");
let catFactButton = document.querySelector(".cat-fact-button");
let catImage1 = document.querySelector(".cat-image-1");
const factURL = "https://catfact.ninja/fact?max_length=300";
const imageURL = "https://cataas.com/cat?json=true";
catFactButton.addEventListener("click", getCat);

function getCat() {
  getImage();
  getFact();
}

function getFact() {
  fetch(factURL)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      catFactLabel.innerText = res.fact;
    });
}

function getImage() {
  fetch(imageURL)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      catImage1.src = `https://cataas.com${res.url}`;
    });
}
