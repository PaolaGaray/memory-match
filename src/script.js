
ready();
//-------------------------------------countdown-------------------------------------------

let gameOver = document.getElementById('game-over-text');

let seconds = document.getElementById("countdown").textContent;
let countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0){
    clearInterval(countdown);
    gameOver.classList.add('visible');
    gameOverAudio.play();
  }
}, 1000);


//------------------------------ramdon generation of cards---------------------------------

let cardsArrayNumbers = getRandomCardsArray(cardImages.length, cardsPerGame);
console.log(cardsArrayNumbers); //array of cards represented by numbers

for(let i=0; i<cardsArrayNumbers.length; i++){

    if(cardsArrayNumbers[i] === 1){
      cardsArray.push('assets/blueTrapezoid.png');
    } else if(cardsArrayNumbers[i] === 2){
      cardsArray.push('assets/greenCircle.png');
    } else if(cardsArrayNumbers[i] === 3){
      cardsArray.push('assets/purpleTriangle.png');
    } else if(cardsArrayNumbers[i] === 4){
      cardsArray.push('assets/redSquare.png');
    } else if (cardsArrayNumbers[i] === 5){
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
let matchCounter = 0;
let score = 0;
let cardsPlayed = 0;
let accuracy = 0;

yesButton.addEventListener('click', function(){
  let img = document.getElementById('card-image').getElementsByTagName('img')[0];
  index++;
  img.src = cardsArray[index];
  newArr.push('y');
  console.log("yes function", newArr);

/*
  let flashit1 = document.getElementById("card-image");
  if(flashit1.classList.contains("flashit")){
    flashit1.classList.remove("flashit");
  } else {
    flashit1.classList.add("flashit");
  }


  let flashit2 = document.getElementById("empty-card");
  if(flashit2.classList.contains("flashit")){
    flashit2.classList.remove("flashit");
  } else {
    flashit2.classList.add("flashit");
  }
*/


  if(answers[index-1] === newArr[index-1]){
    cardsPlayed++;
    document.getElementById("cards-played").textContent = cardsPlayed;
    matchCounter++;
    document.getElementById("matches").textContent = matchCounter;
    score = score + 50;
    document.getElementById("final-score").textContent = score;   
    document.getElementById("score").textContent = score;
    
    let check2 = document.getElementById('check-tick')
    check2.style.visibility = 'visible';

    let cross2 = document.getElementById('check-cross');
    cross2.style.visibility = 'hidden';


    successAudio.play();
    } else{
      cardsPlayed++;
      document.getElementById("cards-played").textContent = cardsPlayed;
      let cross = document.getElementById('check-cross');
      cross.style.visibility = 'visible';

      let check = document.getElementById('check-tick');
      check.style.visibility = 'hidden';

      errorAudio.play();
    };
  
  accuracy = Math.floor((matchCounter/cardsPlayed)*100);
  document.getElementById("accuracy").textContent = accuracy;
  console.log(matchCounter);
  console.log(cardsPlayed);
});



noButton.addEventListener('click', function(){


  let img = document.getElementById('card-image').getElementsByTagName('img')[0];
  index++;
  img.src = cardsArray[index];
  newArr.push('n');
  console.log("no function", newArr);


/*
    let flashit1 = document.getElementById("card-image");
    if(flashit1.classList.contains("flashit")){
      flashit1.classList.remove("flashit");
    } else {
      flashit1.classList.add("flashit");
    }


    let flashit2 = document.getElementById("empty-card");
    if(flashit2.classList.contains("flashit")){
      flashit2.classList.remove("flashit");
    } else {
      flashit2.classList.add("flashit");
    }
*/


  if(answers[index-1] === newArr[index-1]){

    cardsPlayed++;
    document.getElementById("cards-played").textContent = cardsPlayed;
    matchCounter++;
    document.getElementById("matches").textContent = matchCounter;
    score = score + 50;
    document.getElementById("final-score").textContent = score; 

    document.getElementById("score").textContent = score; 
    successAudio.play();

    let check = document.getElementById('check-tick')
    check.style.visibility = 'visible';

    let cross1 = document.getElementById('check-cross');
    cross1.style.visibility = 'hidden';

    } else{
    cardsPlayed++;
    document.getElementById("cards-played").textContent = cardsPlayed;
    let cross = document.getElementById('check-cross');
    cross.style.visibility = 'visible';

    let check2 = document.getElementById('check-tick');
    check2.style.visibility = 'hidden';

    errorAudio.play();

    };

  accuracy = Math.floor((matchCounter/cardsPlayed)*100);
  document.getElementById("accuracy").textContent = accuracy;
  console.log(matchCounter);
  console.log(cardsPlayed);
});


//----------------------------------------------------------------------