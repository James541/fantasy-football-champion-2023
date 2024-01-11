const image = document.getElementById("playerImg");
const button = document.getElementById("button");

button.addEventListener("click", changePlayer);

const imageArray = [
  "amonra.jpg",
  "kittle.jpg",
  "devonta.jpg",
  "cowboys.jpg",
  "flowers.jpg",
  "burrow.jpg",
];

let imgNum = -1;

function changePlayer() {
  imgNum++;
  image.src = imageArray[imgNum];
}
