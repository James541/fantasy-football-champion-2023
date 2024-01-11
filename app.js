const image = document.getElementById("playerImg");
const headerBigText = document.getElementById("headerBigText");
const headerPlainText = document.getElementById("headerPlainText");

const imageArray = [
  "amonra.jpg",
  "kittle.jpg",
  "devonta.jpg",
  "cowboys.jpg",
  "flowers.jpg",
  "burrow.jpg",
];

let imgNum = -1;
let count = 1;

function changePlayer() {
  if (count < imageArray.length) {
    count++;
    imgNum++;
    image.src = imageArray[imgNum];
  } else {
    image.src = "burrow.jpg";
    headerBigText.innerText = "See you in 2024 Mother Fuckers";
    headerPlainText.innerText = "";
  }
}

const intervalId = setInterval(changePlayer, 6000);
