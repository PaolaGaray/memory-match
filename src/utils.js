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

function getScore(cardsArray, newArr){

  console.log(newArr);

  for (let i = 0; i < cardsArray.length; i++){
    for (let j = 0; j < newArr.length; j++){
         //some code here
    }
  }
}