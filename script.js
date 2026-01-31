const startButton = document.getElementById("start_button");
const gifLanding = document.querySelector(".gif");
const questionLanding = document.querySelector(".question");

let questionMain = null;
let gifMain = null;
let yesButton = null;
let noButton = null;
let input = null;
let count = 0;

startButton.addEventListener("click", () => {
    input = document.getElementById("fname").value;

    if (input === "") {
        gifLanding.src = "https://media.giphy.com/media/hiJ9ypGI5tIKdwKoK2/giphy.gif";
        questionLanding.innerHTML = "Please give me your name before you start!";
    } else {
        document.head.innerHTML = `
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Do You Love Me?</title>
            <link rel='stylesheet' href='style1.css'/>
        `;

        document.body.innerHTML = `
            <div class='wrapper'>
                <h2 class='question'>Hello ${input}! Will you go out with me?</h2>
                <img class='gif' alt='Oops' src="img/heart.gif"/>
                <div class='btn-group'>
                    <button class='yes-btn'>Yes</button>
                    <button class='no-btn' style="position: absolute;">No</button>
                </div>
            </div>
        `;

        questionMain = document.querySelector(".question");
        gifMain = document.querySelector(".gif");
        yesButton = document.querySelector(".yes-btn");
        noButton = document.querySelector(".no-btn");

        
        noButton.style.position = "absolute"; 

        yesButton.addEventListener("click", yesButtonListener);
        noButton.addEventListener("click", noButtonListener);
    }
});

function yesButtonListener() {
    document.body.innerHTML = `
        <div class='wrapper'>
            <h2 class='question'>Yay! Thank you, tHaNk YOU :) ❤️, ${input}! My Insta (fizz_hs9)</h2>
            <img class='gif' alt='gif' src="img/myaowl-cute.gif"/>
        </div>
    `;
}

function noButtonListener() {
    if (count < 5) {
        gifMain.src = "img/cute-crying.gif";
        questionMain.innerHTML = "You don't wanna go out with me?";
    } else if (count >= 5 && count < 10) {
        gifMain.src = "img/stop.gif";
        questionMain.innerHTML = "Stop playing with me! Don't you wanna go out with me?!";
    } else {
        gifMain.src = "img/bunny-nope.gif";
        questionMain.innerHTML = "JUST ANSWER IT! YOU WANNA GO OR NOT?!";
    }

    const noButtonRect = noButton.getBoundingClientRect();
    const yesButtonRect = yesButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (
        randomX < yesButtonRect.right &&
        randomX + noButtonRect.width > yesButtonRect.left &&
        randomY < yesButtonRect.bottom &&
        randomY + noButtonRect.height > yesButtonRect.top
    );

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    count += 1;
}

