
let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");

//-------------------------------------------------------------------------------------------
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


console.log(cardsArray);

//-------------------------------------------------------------------------------------------

loadCards(cardsArray);

//-------------------------------------------------------------------------------------------
//Buttons functionality and store clicks

let newArr = [];

yesButton.addEventListener('click', function(){
  let img = document.getElementById('card-image').getElementsByTagName('img')[0];
  index++;
  index = index % cardImages.length; // This is for if this is the last card then go to first one
  img.src = cardImages[index];
  newArr.push('y');
  console.log(newArr);
});

noButton.addEventListener('click', function(){
  let img = document.getElementById('card-image').getElementsByTagName('img')[0];
  index++;
  index = index % cardImages.length; // This is for if this is the last card then go to first one
  img.src = cardImages[index];
  newArr.push('n');
  console.log(newArr);
});

//console.log(newArr);

//-------------------------------------------------------------------------------------------
