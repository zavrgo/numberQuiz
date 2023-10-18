// console.log(6);
// console.log(6-7*7+(0-9));
// console.log("kak dela");
// let playername="Sn1-Fi"
// console.log(playername);
// playername="VoKsy"
// console.log(playername);
// let password="chikibamboni"
// console.log("dear "+playername+" this is your password: "+password);
let checkButton = document.getElementById("checkButton")
let playerInput = document.getElementById("playerInput")
let secretNumber = Math.floor(Math.random() * 100)
let newGame = document.getElementById("newGame")
let rule = document.getElementById("rule")
let lives = 6
let livesTitle = document.getElementById("lives")
livesTitle.innerHTML = "♥️ ".repeat(lives)
let formWin = document.getElementById("formWin")
let newGame2 = document.getElementById("newGame2")
let settings = document.getElementById("settings")
let gameForm = document.getElementById("gameForm")
let sm = document.getElementById("sm")
let lvl = "medium"
let mainTitle = document.getElementById("mainTitle")
let time = 15
let timer
if (lvl == "hard") {
    startTimer()
}
function startTimer() {
    time = 15
    clearInterval(timer)
    timer = setInterval(function () {
        time = time - 1
        mainTitle.innerHTML = "обновление числа через: " + time
        if (time == 0) {
            startTimer()
        }
    }, 1000)
}








checkButton.onclick = function (event) {
    formWin.style.transition = "2s"
    event.preventDefault()
    console.log(playerInput.value);
    if (secretNumber == playerInput.value) {
        console.log("победа!");
        formWin.children[0].src = "50.jpg"
        formWin.style.transform = "translate(-50%,-50%) rotate(0deg) scale(1)"
        newGame2.innerHTML = "Жизней:" + lives + ". Начать игру"
        checkButton.disabled = true
    }
    else {
        console.log("неверно");
        lives = lives - 1
        livesTitle.innerHTML = "♥️ ".repeat(lives)
        console.log("-1 жизнь. жизнь: " + lives);

        if (secretNumber > playerInput.value) {
            rule.innerHTML = "⬆️"
            console.log("⬆️");
        }
        if (secretNumber < playerInput.value) {
            rule.innerHTML = "⬇️"
            console.log("⬇️");

        }
        rule.style.filter = "hue-rotate(" + Math.floor(Math.random() * 360) + "deg)"
        if (lives < 1) {
            formWin.children[0].src = "volk.png"
            formWin.style.transform = "translate(-50%,-50%) rotate(0deg) scale(1)"
            checkButton.disabled = true
            newGame2.innerHTML = "Число: " + secretNumber + ". Начать игру"
        }
    }
}
settings.onclick = function (event) {
    event.preventDefault()
    gameForm.style.display = "none"
    sm.style.display = "block"
}


console.log(newGame);
newGame.onclick = function () {
    startGame()
    
}
console.log(newGame2);
newGame2.onclick = function () {
    formWin.style.transform = "translate(-50%,-50%) rotate(3600deg) scale(0)"
    startGame()
}
function startGame() {
    checkButton.disabled = false

    rule.innerHTML = "вводи число и проверяй!"
    playerInput.value = ""
    if (lvl == "easy") {
        secretNumber = Math.floor(Math.random() * 100)
        lives = 6
    }
    else if (lvl == "medium") {
        secretNumber = Math.floor(Math.random() * 200)
        lives = 6
    }
    else {
        secretNumber = Math.floor(Math.random() * 500)
        lives = 7
        time = 15
        startTimer()
    }


    livesTitle.innerHTML = "♥️ ".repeat(lives)
}


