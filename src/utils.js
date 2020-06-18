function getRandomCardsArray(cardImagesLength, cardsPerGame){
  let cardsArray = [];
  for(let i=0; i<=cardsPerGame; i++){
      cardsArray.push(Math.floor(Math.random()*(cardImagesLength)+1));
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
  clickToStartAudio.play();
  clickToStartAudio.loop = true;
  let clickToStart = document.getElementById('click-to-start');
  clickToStart.addEventListener('click', () => {
    clickToStart.classList.remove('visible');
    clickToStartAudio.pause();
  })
}
//-------------------------------------------------------------------

function showGreenCheck(){
  let cross = document.getElementById('check-cross');
    if(cross.style.visibility == 'visible'){
       cross.style.visibility = 'hidden';
      }
    }


function showRedCross(){
  let check = document.getElementById('check-tick');
    if(check.style.visibility == 'visible'){
       check.style.visibility = 'hidden';
    }    
}

//-------------------------------------------------------------------