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
let underRule = document.getElementById("underRule")
// задается 6 жизней
let lives = 6
let livesTitle = document.getElementById("lives")
livesTitle.innerHTML = "♥️ ".repeat(lives)
let formWin = document.getElementById("formWin")
let newGame2 = document.getElementById("newGame2")
let settings = document.getElementById("settings")
let gameForm = document.getElementById("gameForm")
let sm = document.getElementById("sm")
let lvl = "лёгкий"
let mainTitle = document.getElementById("mainTitle")
let time = 15
let timer
let gameTime
let gameTimer
let seconds = 0
let backButton1 = document.getElementById("BackButton1")
let backButton = document.getElementById("BackButton")
let color = "linear-gradient(90deg, rgba(132, 207, 255, 1) 5%, rgba(145, 255, 166, 1) 35%, rgba(255, 198, 122, 1) 50%, rgba(195, 255, 176, 1) 65%, rgba(195, 255, 254, 1) 95%)"
let audio = document.getElementById("audio")
let counter = 0
let statsMod = document.getElementById("statsMod")
let stats = document.getElementById("stat")
let buttonNext = document.getElementById("next")
let buttonBack = document.getElementById("back")
let tbody = document.getElementById("tbody")
let epicNumber = Math.floor(Math.random() * 100)
// задает одно рандомное число из 100
let audios = [
    "Shostakovich;_Symphony_no._5,_3.ogg",
    "Tchaikovsky,_Concerto_No.1_in_B-flat_minor_Op.23,_I._Allegro.ogg",
    "Tchaikovsky,_Concerto_No.1_in_B-flat_minor_Op.23,_II._Andantino.ogg",
    "Tchaikovsky,_Concerto_No.1_in_B-flat_minor_Op.23,_III._Allegro.ogg",
]
let numbers = [

]
// массив держит заданное человеком
let data = [

]
// for (let i = 1;i<6;i=i+1) {
//     console.log ("собака№" [i]);
// }

// 1 2 4 8 16 32

// баг со стрелкой









buttonNext.onclick = function (event) {
    counter = counter + 1
    if (counter == 4) {
        counter = 0
    }
    event.preventDefault()
    console.log("next song");
    audio.children[0].src = audios[counter]
    audio.load()
    audio.play()
}


function updateHistory() {
    let entry = {
        date: new Date().toLocaleDateString(),
        secretNumber: secretNumber,
        lives: lives,
        time: gameTime,
        lvl: lvl,
        numbers: numbers
    }
    data.push(entry)
}



audio.addEventListener("ended", () => {
    counter = counter + 1
    if (counter == 4) {
        counter = 0
    }
    audio.children[0].src = audios[counter]
    audio.load();
    audio.play()
});

buttonBack.onclick = function (event) {
    counter = counter - 1
    if (counter == -1) {
        counter = 3
    }
    event.preventDefault()
    console.log("last song");
    audio.children[0].src = audios[counter]
    audio.load()
    audio.play()
}

// audio.ended=function () {
//     counter = counter + 1
//     audio.children[0].src = audios[counter]
//     audio.load()
//     audio.play()
// }

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
            // запустить таймер
            secretNumber = Math.floor(Math.random() * 500)
            console.log(secretNumber);
        }
    }, 1000)
}




function startGameTimer() {
    gameTime = 0
    epicNumber = Math.floor(Math.random() * 100)
    console.log(epicNumber);
    gameTimer = setInterval(function () {
        // чтобы запустить интервал
        gameTime = gameTime + 1
        
    }
        , 1000)
}
console.log(timer);





backButton.onclick = function (event) {
    event.preventDefault()
    console.log("save");
    sm.style.display = "none"
    gameForm.style.display = "block"
    lvl = document.querySelector('input[name="lvl"]:checked').value;
    color = document.querySelector('input[name="color"]:checked').value;
    startGame()
    clearInterval(gameTimer)

}

backButton1.onclick = function (event) {
    event.preventDefault()
    console.log("save");
    statsMod.style.display = "none"
    gameForm.style.display = "block"
    clearInterval(gameTimer)

}



checkButton.onclick = function (event) {
    formWin.style.transition = "2s"
    if (rule.innerHTML == "вводи число и проверяй!") {
        underRule.innerHTML = "стрелка покажет, больше число или меньше"
        startGameTimer()
    }
    event.preventDefault()
    numbers.push(parseInt(playerInput.value))
    console.log(numbers);
    console.log(playerInput.value);

    if (epicNumber == playerInput.value) {
        let randInt = Math.floor(Math.random() * 3)
        console.log(randInt);
        switch (randInt) {
            case 0:
                console.log("вы ввели эпическое число");
                lives = lives + 1
                livesTitle.innerHTML = "♥️ ".repeat(lives)
                epicNumber = Math.floor(Math.random() * 100)
                underRule.innerHTML = "вы ввели эпическое число, теперь у вас на 1 жизнь больше"
                setTimeout(function () {
                    underRule.innerHTML = "числа будут от 0 до 100"
                }, 10000)
                break;
            case 1:
                if (secretNumber % 2 == 0) {
                    underRule.innerHTML = "секретное число четное"
                }

                else {
                    underRule.innerHTML = "секретное число нечетное"
                }
                setTimeout(function () {
                    underRule.innerHTML = "числа будут от 0 до 100"
                }, 10000)
                break;
            case 2:
                let lowLimit = Math.floor(secretNumber / 10) * 10
                let highLimit = lowLimit + 10
                underRule.innerHTML = "секретное число в интервале между " + lowLimit + " и " + highLimit
                break;
            case 3:
                let firstNumber = Math.floor(secretNumber / parseInt(1 + "0".repeat(secretNumber.toString().length - 1)))
                underRule.innerHTML = "первая цифра секретного числа равна" + firstNumber + ". число может быть 3-ех значным если вы на среднем или сложном уровне"
                setTimeout(function() {
                    underRule.innerHTML = "числа будут от 0 до 100"
                }, 10000)
                break;
        }
    }


    else if (secretNumber == playerInput.value) {
        console.log("победа!");
        updateHistory()
        formWin.children[0].src = "50.jpg"
        // формВин имеет несколько детей, первый ребенок это 0
        formWin.style.transform = "translate(-50%,-50%) rotate(0deg) scale(1)"
        newGame2.innerHTML = "Жизней:" + lives + ". Начать игру"
        checkButton.disabled = true
        clearInterval(gameTimer)
        // нужен чтобы остановить таймер

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
            // инерХТМЛ задается для изменения чего либо написаного в ХТМЛ
            console.log("⬇️");

        }
        rule.style.filter = "hue-rotate(" + Math.floor(Math.random() * 360) + "deg)"
        if (lives < 1) {
            formWin.children[0].src = "volk.png"
            updateHistory()
            clearInterval(gameTimer)
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

stats.onclick = function (event) {
    tbody.innerHTML = ""
    event.preventDefault()
    gameForm.style.display = "none"
    statsMod.style.display = "inline-block"
    for (let i = 0; i < data.length; i = i + 1) {
        console.log(data[i].numbers, data[i].secretNumber);
        let rowClass = "redRow"
        if (data[i].numbers.includes(data[i].secretNumber)) {
            rowClass = "greenRow"

        }
        let row = `
        <tr class = "${rowClass}">
            <td>${i + 1}</td>
            <td>${data[i].date}</td>
            <td>${data[i].secretNumber}</td>
            <td>${data[i].lives}</td>
            <td>${data[i].time}</td>
            <td>${data[i].lvl}</td>
            <td>${data[i].numbers}</td>
        </tr>
        `
        // дата нужна что бы запомнить информацию
        tbody.innerHTML = tbody.innerHTML + row
    }
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
    clearInterval(timer)
    numbers = []
    mainTitle.innerHTML = "угадай число"
    rule.innerHTML = "вводи число и проверяй!"
    playerInput.value = ""
    document.body.style.backgroundImage = color
    if (lvl == "лёгкий") {
        secretNumber = Math.floor(Math.random() * 100)
        lives = 6
        underRule.innerHTML = "числа будут от 0 до 100"
    }
    else if (lvl == "средний") {
        secretNumber = Math.floor(Math.random() * 200)
        lives = 6
        underRule.innerHTML = "числа будут от 0 до 200"
    }
    else {
        secretNumber = Math.floor(Math.random() * 500)
        lives = 10
        time = 15
        underRule.innerHTML = "числа будут от 0 до 500, каждые 15 секунд число обновляется"

        startTimer()
    }




    livesTitle.innerHTML = "♥️ ".repeat(lives)
    // заставляет менять все жизни на указанное число
}



