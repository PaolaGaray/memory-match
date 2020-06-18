const cardsPerGame = 73;
const cardImages = ['assets/blueTrapezoid.png',
                    'assets/greenCircle.png',
                    'assets/purpleTriangle.png',
                    'assets/redSquare.png',
                    'assets/yellowStar.png'];

//----------------------------------------------------------------
let index = 0;
let cardsArray = []; //array of cards represented by images initialized
let answers = ['y']; //arrray of answers initialized

//----------------------------------------------------------------
let clickToStartAudio = new Audio('assets/start.wav');
let successAudio = new Audio('assets/match.wav');
let errorAudio = new Audio('assets/error.mp3');
let gameOverAudio = new Audio('assets/gameover.wav');

//----------------------------------------------------------------