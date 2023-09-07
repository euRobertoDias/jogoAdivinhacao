const screenOne = document.querySelector(".screen-one")
const screenTwo = document.querySelector(".screen-two")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

// Events
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)

document.addEventListener("keydown", handleResetEnter)


// Callback function
function handleTryClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")

    if (inputNumber.value == "") {
        alert("Tentativa inválida")
    }

    if (Number(inputNumber.value) < 0) {
        alert("O número é menor que 0, por favor tente um número entre 0 e 10")
    }

    if (Number(inputNumber.value) > 10) {
        alert("O número é maior que 10, por favor tente um número entre 0 e 10")
    }

    if (Number(inputNumber.value) == randomNumber) {
        handleToggleScreen()
        screenTwo.querySelector("h2").innerText = `Você acertou em ${xAttemps} tentativas`
    }

    inputNumber.value = ""
    xAttemps++
}

function handleResetClick() {
    handleToggleScreen()
    xAttemps = 1
    randomNumber = Math.round(Math.random() * 10)
}

function handleResetEnter(e) {
    if (e.key == "Enter" && screenOne.classList.contains("hide")) {
        handleResetClick()
    }
}

function handleToggleScreen() {
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}


