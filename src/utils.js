function getRandomCardsArray(cardImagesLength, cardsPerGame){
  let cardsArray = [];
  for(let i=0; i<cardsPerGame; i++){
      cardsArray.push(Math.floor(Math.random()*(cardImagesLength-1)+1));
  }
  return cardsArray;
}

//-------------------------------------------------------------------

function loadCards(cardsArray){
  let img = document.createElement('img');
  img.src = cardsArray[index];
  let card = document.getElementById('card-image').appendChild(img);
  card.classList.add("card");
}
 
//-------------------------------------------------------------------

function ready(){
  let clickToStart = document.getElementById('click-to-start');
  clickToStart.addEventListener('click', () => {
    clickToStart.classList.remove('visible');
    audio.loop = true;
    audio.play();
  })
}