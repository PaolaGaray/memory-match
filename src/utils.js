function loadCards(){
    let img = document.createElement('img');
    img.src = cardImages[index];
    let card = document.getElementById('card-image').appendChild(img);
    card.classList.add("card");
  }

  