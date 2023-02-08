//your code here
const game = document.getElementById("game");
const message = document.getElementById("message");
const reset = document.getElementById("reset");
const verify = document.getElementById("verify");
const para = document.getElementById("para");

let selectedTiles = [];
let images = game.getElementsByTagName("img");

function shuffle() {
  for (let i = images.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = images[i].src;
    images[i].src = images[j].src;
    images[j].src = temp;
  }
}

shuffle();

game.addEventListener("click", function(event) {
  if (event.target.tagName === "IMG") {
    if (selectedTiles.length < 2) {
      event.target.style.border = "2px solid blue";
      selectedTiles.push(event.target);
      if (selectedTiles.length === 2) {
        verify.style.display = "inline-block";
      }
    }
  }
});

reset.addEventListener("click", function() {
  selectedTiles = [];
  for (const image of images) {
    image.style.border = "none";
  }
  reset.style.display = "none";
  verify.style.display = "none";
  para.style.display = "none";
});

verify.addEventListener("click", function() {
  if (selectedTiles[0].src === selectedTiles[1].src) {
    para.textContent = "You are a human. Congratulations!";
    para.style.display = "block";
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    para.style.display = "block";
  }
  reset.style.display = "inline-block";
  verify.style.display = "none";
});
