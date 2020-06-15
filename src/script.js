
let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");

console.log(yesButton);
console.log(noButton);


loadCards();

yesButton.addEventListener('click', function(){
  let img = document.getElementById('card-image').getElementsByTagName('img')[0];
  index++;
  index = index % cardImages.length; // This is for if this is the last card then go to first one
  img.src = cardImages[index];
})

noButton.addEventListener('click', function(){
  let img = document.getElementById('card-image').getElementsByTagName('img')[0];
  index++;
  index = index % cardImages.length; // This is for if this is the last card then go to first one
  img.src = cardImages[index];
})