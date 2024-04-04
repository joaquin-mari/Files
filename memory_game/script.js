const start = document.querySelector(".heading");
const box = document.querySelector(".card-box");
const container = document.querySelector(".container");
const timer = document.querySelector(".timer");
let seconds = 0;

//This is the function that switches from the start screen to the game screen
//Also could be done in a prettier way, but this is the first project that I made

start.onclick = function () {
  box.style.display = "block";
  container.style.width = "90%";
  container.style.height = "90%";
  start.style.paddingTop = "20px";
  start.style.paddingBottom = "20px";
  start.style.cursor = "auto";
  start.innerText = "MEMORY";
  start.style.fontWeight = "600";
  start.style.fontSize = "30px";
  timer.style.display = "block";
  setInterval(updateTimer, 1000);
};

let formattedTime;
//This function manages the timer
function updateTimer() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  formattedTime = `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
  timer.textContent = formattedTime;
  seconds++;
  timer.style.fontWeight = "600";
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//this variable is the variable that contains all of the images together of the class image
const cardDisplay = document.querySelectorAll(".image");
//this variable holds the score
let score = 0;
//this array holds all of the images
let images = [
  "images/avocado.png",
  "images/banana.png",
  "images/bomb.png",
  "images/mario.png",
  "images/pickaxe.png",
  "images/pokeball.png",
  "images/avocado.png",
  "images/banana.png",
  "images/bomb.png",
  "images/mario.png",
  "images/pickaxe.png",
  "images/pokeball.png",
  "images/avocado.png",
  "images/banana.png",
  "images/bomb.png",
  "images/mario.png",
  "images/pickaxe.png",
  "images/pokeball.png",
  "images/avocado.png",
  "images/banana.png",
  "images/bomb.png",
  "images/mario.png",
  "images/pickaxe.png",
  "images/pokeball.png",
];

//This dictionary will contain whats in the back of every card
//Cards have all of them a mistery image in the front and a random image from the images array in the back
const cardBack = {};

//This is the for loop that assigns all of the images to the cardBack dictionary
for (let i = 1; i <= 24; i++) {
  //The way that it works is as follows:

  //One random index from 0 to the current length of the images array
  let index = Math.floor(Math.random() * images.length);
  //Then in the cardBack dictionary a new entry is created, using the current i as a key and assigning a random image from the
  //images array using the previous random index
  cardBack["card" + i] = images[index];
  //Ultimately that random image that was taken is taken out of the images array
  //Its important to remember now the images array has an image less and its length is reduced by 1
  images.splice(index, 1);
}

//This are the variables used in the comparison of cards
//compare holds the card to be compared
let compare = null;
//count is used to count if this is the first card or second card revealed
let count = 1;
let mistakes = 0;

//This is the way that the comparison between two cards to see if they have the same image works
cardDisplay.forEach((cardDisplay) => {
  cardDisplay.addEventListener("click", async () => {
    cardDisplay.src = cardBack[cardDisplay.id];
    if (count == 1) {
      compare = cardDisplay;
      count++;
    } else {
      await delay(500);
      if (compare.src != cardDisplay.src) {
        compare.src = "images/mistery.png";
        cardDisplay.src = "images/mistery.png";
        mistakes++;
      } else {
        score++;
      }
      count--;
      compare = null;
    }
    if (score == 12) {
      endProgram();
    }
  });
});

const end = document.querySelector(".end");
const result = document.querySelector(".result");
const errors = document.querySelector(".errors");

//This function switches to the end screen
function endProgram() {
  console.log(mistakes);
  console.log(mistakes);
  end.style.display = "block";
  result.innerHTML += formattedTime;
  errors.innerHTML += mistakes;
  timer.style.display = "none";
}
