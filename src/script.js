
//------------------------------validate if the game was loaded-----------------------------
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}

//-----------------------------Countdown----------------------------------------------------

let gameOver = document.getElementById('game-over-text');


let seconds = document.getElementById("countdown").textContent;
let countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0){
    clearInterval(countdown);
    gameOver.classList.add('visible');
    audio.pause();
  }
}, 1000);

//-------------------------------------------------------------------------------------------

let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");
let testButton = document.getElementById("test-button");


//Ramdon generation of cards
let cardsArrayNumbers = getRandomCardsArray(cardImages.length, cardsPerGame);
//console.log(cardsArrayNumbers);

let cardsArray = [];

for(let i=0; i<cardsArrayNumbers.length; i++){
  if(cardImages.indexOf('assets/blueTrapezoid.png') === cardsArrayNumbers[i]){
    cardsArray.push('assets/blueTrapezoid.png');
  } else if(cardImages.indexOf('assets/greenCircle.png') === cardsArrayNumbers[i]){
    cardsArray.push('assets/greenCircle.png');
  } else if(cardImages.indexOf('assets/purpleTriangle.png') === cardsArrayNumbers[i]){
    cardsArray.push('assets/purpleTriangle.png');
  } else if(cardImages.indexOf('assets/redSquare.png') === cardsArrayNumbers[i]){
    cardsArray.push('assets/redSquare.png');
  } else if (cardImages.indexOf('assets/yellowStar.png') === cardsArrayNumbers[i]){
    cardsArray.push('assets/yellowStar.png');
  }
}


//-------------------------------------------------------------------------------------------

loadCards(cardsArray);

//-------------------------------------------------------------------------------------------
//Buttons functionality and store clicks

let newArr = [];

let rigthAnswers = ['y', 'n', 'n', 'y', 'y', 'y', 'y', 'n', 'y','y'];
let matchCounter = 0;
let score = 0;

yesButton.addEventListener('click', function(){
  let img = document.getElementById('card-image').getElementsByTagName('img')[0];
  index++;
  img.src = cardsArray[index];
  newArr.push('y');
  console.log("yes function", newArr);
  if(rigthAnswers[index-1] === newArr[index-1]){
    matchCounter++;
    document.getElementById("matches").textContent = matchCounter;
    score = score + 50;  
    document.getElementById("score").textContent = score;
    };
  console.log(matchCounter);

  //return matchCounter;
});


noButton.addEventListener('click', function(){
  let img = document.getElementById('card-image').getElementsByTagName('img')[0];
  index++;
  img.src = cardsArray[index];
  newArr.push('n');
  console.log("no function", newArr);
  if(rigthAnswers[index-1] === newArr[index-1]){
    matchCounter++;
    document.getElementById("matches").textContent = matchCounter;
    score = score + 50; 
    document.getElementById("score").textContent = score; 
    };
  console.log(matchCounter);
  
  //return matchCounter;
});

//-------------------------------------------------------------------------------------------