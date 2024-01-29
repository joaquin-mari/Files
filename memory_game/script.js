const start = document.querySelector(".heading")
const box = document.querySelector(".card-box")
const container = document.querySelector(".container")
const timer = document.querySelector(".timer")
let seconds = 0;

start.onclick = function(){
    box.style.display = "block"
    container.style.width = "90%"
    container.style.height = "90%"
    start.style.paddingTop = "20px"
    start.style.paddingBottom = "20px"
    start.style.cursor = "auto"
    start.innerText = "MEMORY"
    start.style.fontWeight = "600"
    start.style.fontSize = "30px"
    timer.style.display = "block"
    setInterval(updateTimer, 1000);

}

function updateTimer(){
 
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    timer.textContent = formattedTime;
    seconds++;
    timer.style.fontWeight = "600"
}



const cardDisplay = document.querySelectorAll(".image")
let score = 0
let images = ["images/avocado.png", "images/banana.png", "images/bomb.png",
              "images/mario.png", "images/pickaxe.png", "images/pokeball.png", 
              "images/avocado.png", "images/banana.png", "images/bomb.png",
              "images/mario.png", "images/pickaxe.png", "images/pokeball.png", 
              "images/avocado.png", "images/banana.png", "images/bomb.png",
              "images/mario.png", "images/pickaxe.png", "images/pokeball.png", 
              "images/avocado.png", "images/banana.png", "images/bomb.png",
              "images/mario.png", "images/pickaxe.png", "images/pokeball.png", ]

const cardBack = {}

for(let i = 1; i <= 24; i++){
    let index = Math.floor(Math.random() * images.length)
    cardBack["card" + i] = images[index]
    images.splice(index, 1)
}

let compare = null
let count = 1
let mistakes = 0

cardDisplay.forEach(cardDisplay => {
    cardDisplay.addEventListener("click", async () => {
    cardDisplay.src = cardBack[cardDisplay.id]
    if(count == 1){
    compare = cardDisplay
    count++
    }
    else{
        await delay(500)
        if(compare.src != cardDisplay.src){
            compare.src = "images/mistery.png"
            cardDisplay.src = "images/mistery.png"
            mistakes++
        }
        else{
            score++
        }
        count--
        compare = null
    }
    if(score == 12){
        endProgram()
    }
})})

const end = document.querySelector(".end")
const result = document.querySelector(".result")
const errors = document.querySelector(".errors")

function endProgram(){
    end.style.display = "block"
    result.innerHTML += formattedTime
    errors.innerHTML += misitakes
    timer.style.display = "none"

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}