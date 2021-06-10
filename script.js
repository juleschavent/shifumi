
// lier au HTML
const choices = document.querySelectorAll(".choice");
const title = document.querySelector('#title');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const body = document.querySelector('body');
const btn = document.querySelector('#btn');

// défini une variable pour lier au click
let myChoice = "";
let computerChoice = "";
let myScore = 0;
let computerScore = 0;
score.innerHTML = `<h3>You score : ${myScore}</h3>
                   <h3>Computer score : ${computerScore}</h3>`;

// défini un tableau pour les possibilités de choix de l'ordi
const computerChoices = ["rock", "paper", "scisors"];
const possibleResult = ["You win !!", "You lose..", "Draw"];


// modifie la variable myChoice en fonction de l'image cliquée 
//si choix rock
choices[0].addEventListener('click', function(){
    console.log("your choice is rock");
    myChoice = "rock";
    getComputerChoice();
    if (myChoice && computerChoice == "scisors") {
        console.log("win")
        title.innerHTML = `<h1>${possibleResult[0]}</h1>`;
        result.innerHTML = `
        <h2>You chose rock <i class="choice small-icon far fa-hand-rock"></i></h2>
        <h2>Computer chose ${computerChoices[2]} <i class="choice small-icon far fa-hand-peace"></i></h2>
        `;
        myScorePlus();
        findWinner()
    } else if (myChoice == computerChoice) {
        console.log('Egalité')
        title.innerHTML = `<h1>${possibleResult[2]}</h1>`;
        result.innerHTML = `
        <h2>You chose rock <i class="choice small-icon far fa-hand-rock"></i></h2>
        <h2>Computer chose ${computerChoices[0]} <i class="choice small-icon far fa-hand-rock"></i>`
    } else {
        console.log("Lose");
        title.innerHTML = `<h1>${possibleResult[1]}</h1>`;
        result.innerHTML = `
        <h2>You chose rock <i class="choice small-icon far fa-hand-rock"></i></h2>
        <h2>Computer chose ${computerChoices[1]} <i class="choice small-icon far fa-hand-paper"></i>.</h2>`;
        computerScorePlus()
        findWinner()
    };
});

//si choix paper
choices[1].addEventListener('click', function(){
    console.log("your choice is paper");
    myChoice = "paper";
    getComputerChoice();
    if (myChoice && computerChoice == "rock") {
        console.log("win")
        title.innerHTML = `<h1>${possibleResult[0]}</h1>`;
        result.innerHTML = `
        <h2>You chose paper <i class="choice small-icon far fa-hand-paper"></i></h2>
        <h2>Computer chose ${computerChoices[0]} <i class="choice small-icon far fa-hand-rock"></i></h2>`;
        myScorePlus();
        findWinner()
    } else if (myChoice == computerChoice) {
        console.log('Egalité')
        title.innerHTML = `<h1>${possibleResult[2]}</h1>`;
        result.innerHTML = `
        <h2>You chose paper <i class="choice small-icon far fa-hand-paper"></i></h2>
        <h2>Computer chose ${computerChoices[1]} <i class="choice small-icon far fa-hand-paper"></i>`
    } else {
        console.log("Lose");
        title.innerHTML = `<h1>${possibleResult[1]}</h1>`;
        result.innerHTML = `
        <h2>You chose paper <i class="choice small-icon far fa-hand-paper"></i></h2>
        <h2>Computer chose ${computerChoices[2]} <i class="choice small-icon far fa-hand-peace"></i>.</h2>`
        computerScorePlus()
        findWinner()
    };
});

//si choix paper
choices[2].addEventListener('click', function(){
    console.log("your choice is scisors");
    myChoice = "scisors";
    getComputerChoice();
    if (myChoice && computerChoice == "paper") {
        console.log("win")
        title.innerHTML = `<h1>${possibleResult[0]}</h1>`;
        result.innerHTML = `
        <h2>You chose scisors <i class="choice small-icon far fa-hand-peace"></i></h2>
        <h2>Computer chose ${computerChoices[1]} <i class="choice small-icon far fa-hand-paper"></i></h2>`;
        myScorePlus();
        findWinner()
    } else if (myChoice == computerChoice) {
        console.log('Egalité')
        title.innerHTML = `<h1>${possibleResult[2]}</h1>`;
        result.innerHTML = `
        <h2>You chose paper <i class="choice small-icon far fa-hand-paper"></i></h2>
        <h2>Computer chose ${computerChoices[2]} <i class="choice small-icon far fa-hand-peace"></i>`
    } else {
        console.log("Lose");
        title.innerHTML = `<h1>${possibleResult[1]}</h1>`;
        result.innerHTML = `
        <h2>You chose scisors <i class="choice small-icon far fa-hand-peace"></i></h2>
        <h2>Computer chose ${computerChoices[0]} <i class="choice small-icon far fa-hand-rock"></i>.</h2>`
        computerScorePlus()
        findWinner()
    };
});



// FONCTION
// fonction qui défini au hasard le choix de l'ordi
function getComputerChoice() {
    let x = Math.floor(Math.random() *3);
    if (x == 0) {
        console.log('computer choice is rock')
        computerChoice = "rock";
    };
    if (x == 1) {
        console.log('computer choice is paper')
        computerChoice = "paper";
    };
    if (x==2) {
        console.log('computer choice is scisors')
        computerChoice = "scisors";
    };
};

function myScorePlus() {
    score.innerHTML = `
        <h3>You score : ${myScore += 1}</h3>
        <h3>Computer score : ${computerScore}</h3>`;
}

function computerScorePlus() {
    score.innerHTML = `
        <h3>You score : ${myScore}</h3>
        <h3>Computer score : ${computerScore += 1}</h3>`;
}

function findWinner() {
    if (myScore == 3) {
        body.innerHTML = `
        <h1>CONGRATZ, YOU WIN !!!</h1>
        <button id="btn">Restart</button>`;
        let btn = document.querySelector('#btn');
        btn.addEventListener('click', function(){
            window.location.reload(true);
        });
    };
    if (computerScore == 3) {
        body.innerHTML = 
        `<h1>Bouhou, you lose..</h1>
        <button id="btn">Restart</button>`;
        let btn = document.querySelector('#btn');
        btn.addEventListener('click', function(){
            window.location.reload(true);
        });
    };
};

