//start of the program
const start = document.querySelector(".start")
const start_screen = document.querySelector(".start-screen")
const questions = document.querySelector(".questions")

start.addEventListener("click", () => {
    startProgram()
})

async function startProgram() { 
    start_screen.style.display = "none"
    questions.style.display = "block"
}

//Quiz part
const country = document.querySelector(".capital-text")
const image = document.querySelector(".image")
const option1 = document.querySelector(".option1")
const option2 = document.querySelector(".option2")
const option3 = document.querySelector(".option3")
const option4 = document.querySelector(".option4")

const slides = [["Argentina", "images/buenos_aires.jpg", "Quito", "Rosario", "Rio"],
                ["Colombia","images/bogota.jpg","Cartagena", "La Paz", "Medellín", "Bogotá"],
                ["Venezuela", "images/caracas.jpg", "Salvador", "Valparaíso","Caracas", "Havanna" ],
                ["Perú", "images/lima.jpg", "Quito", "Lima", "Santiago", "Granada"],
                ["México", "images/mexico_city.jpg", "Ciudad de México", "San Juan", "Caracas", "Brasilia"],
                ["Uruguay", "images/montevideo.jpg", "Sao Paulo", "Montevideo", "Antigua Guatemala", "Lima"],
                ["Dominican Republic", "images/san_juan.jpeg", "Fortaleza", "Barranquilla", "San Juan", "Puebla"],
                ["Puerto Rico", "images/santo_domingo.jpg", "Santo Domingo", "Santa Cruz", "Tijuana", "La Paz"]]

let score = 0
let slide = 1
let solutions = {}

solutions[1] = "Buenos Aires"
solutions[2] = "Bogotá"
solutions[3] = "Caracas"
solutions[4] = "Lima"
solutions[5] = "Ciudad de México"
solutions[6] = "Montevideo"
solutions[7] = "San Juan"
solutions[8] = "Santo Domingo"

option1.addEventListener("click", () => {
    selectOption(option1)
})
option2.addEventListener("click", () => {
    selectOption(option2)
})
option3.addEventListener("click", () => {
    selectOption(option3)
})
option4.addEventListener("click", () => {
    selectOption(option4)
})

function selectOption(option) {
    if (option.innerHTML == solutions[slide]) {
        console.log("Correct Answer")
        score++
        console.log("Score " + score + " Slide " + slide)
    }
    else {
        console.log("Respuesta incorrecta")
    }
    if(slide >= 8){
        console.log(slide + " " + score)
        questions.style.display = "none"
        endScreen()
    }
    else{
    console.log(option.innerHTML + " " + solutions[slide] + " " + slides.length)
    country.innerHTML = slides[slide][0]
    image.src = slides[slide][1]
    option1.innerHTML = slides[slide][2]
    option2.innerHTML = slides[slide][3]    
    option3.innerHTML = slides[slide][4]
    option4.innerHTML = slides[slide][5]
    slide++
}
}


//End Screen
const end = document.querySelector(".end-screen")
const scoreTag = document.querySelector(".score")
const correctTag = document.querySelector(".correct")
const incorrectTag = document.querySelector(".incorrect")

function endScreen(){
    end.style.display = "block"
    scoreTag.innerHTML += Math.round((score /8) * 100) + "%"
    correctTag.innerHTML += score
    incorrectTag.innerHTML += 8 - score
}
