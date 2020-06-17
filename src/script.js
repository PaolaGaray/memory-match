
//------------------------------validate if the game was loaded-----------------------------
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}
//-------------------------------------countdown-------------------------------------------

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


//------------------------------ramdon generation of cards---------------------------------

let cardsArrayNumbers = getRandomCardsArray(cardImages.length, cardsPerGame);
console.log(cardsArrayNumbers); //array of cards represented by numbers


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
//console.log(cardsArray); //array of cards represented by images

//-----------------------------loading cards in the interface---------------------------------

loadCards(cardsArray);

//------------------------------generation of correct answers array---------------------------

for(let i=0; i<cardsArrayNumbers.length-1; i++){
    if(cardsArrayNumbers[i] === cardsArrayNumbers[i+1]) {
      answers.push('y');
    } else {answers.push('n');}
}
console.log(answers);

//--------------------------check the player's answers and validate matches------------------

let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");

let newArr = [];

let matchCounter = -1;
let score = 0;

yesButton.addEventListener('click', function(){
  let img = document.getElementById('card-image').getElementsByTagName('img')[0];
  index++;
  img.src = cardsArray[index];
  newArr.push('y');
  console.log("yes function", newArr);
  if(answers[index-1] === newArr[index-1]){
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
  if(answers[index-1] === newArr[index-1]){
    matchCounter++;
    document.getElementById("matches").textContent = matchCounter;
    score = score + 50; 
    document.getElementById("score").textContent = score; 
    };
  console.log(matchCounter);
  
  //return matchCounter;
});

//--------------------------------------------