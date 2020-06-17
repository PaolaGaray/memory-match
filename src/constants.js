const cardsPerGame = 73;
const cardImages = ['assets/blueTrapezoid.png',
                    'assets/greenCircle.png',
                    'assets/purpleTriangle.png',
                    'assets/redSquare.png',
                    'assets/yellowStar.png'];

//----------------------------------------------------------------
let index = 0;
let audio = new Audio('assets/start.wav');
let cardsArray = []; //array of cards represented by images initialized
let answers = ['y']; //arrray of answers initialized
