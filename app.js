//BlackJack game using Javascript HTML and CSS

let blackjack_game = {

    "You": {"Score": "#Your-BlackJack-Result", "div": "#Your-box", "score": 0,},
    "Dealer": {"Score": "#Dealer-BlackJack-Result", "div": "#Dealer-box", "score": 0,},
    "Cards": ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    "cardsMap": {'A': [1, 11], '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10,},
    "Wins": 0,
    "Losses": 0,
    "Draws": 0,
}

const YOU = blackjack_game['You'];
const DEALER = blackjack_game['Dealer'];

const HIT_SOUND = new Audio('sounds/swish.m4a');

//connecting to the id found in the html
document.querySelector('#hit').addEventListener('click', blackjackHit);
document.querySelector('#deal').addEventListener('click', blackjackDeal);
document.querySelector('#stand').addEventListener('click', dealerLogic);

//when you press the hit button, it'll distribute a card to you
//keep going as long as your 'score' is under 21
function blackjackHit(){
    r = document.querySelector('#blackjack-result').textContent;
    
    if (YOU['score'] <= 21){
        card = pickCard();
        showCard(YOU);
        updateScore(card, YOU);
        showScore(YOU);

    }
    else{
        alert('YOU BUSTED')
    }

}

//show the cards distrubuted to the player
function showCard(activePlayer){

    displayCard(card, activePlayer);
}

//begin the dealing of the cards to player and dealer
function blackjackDeal() {
    document.querySelector('#blackjack-result').textContent = 'Play';
    document.querySelector('#blackjack-result').getElementsByClassName.color = '#212529'

    updateTable();

    let your_Images = document.querySelector('#your-box').querySelectorAll('img');
    let dealer_Images = document.querySelector('#dealer-box').querySelectorAll('img');
    
    for (let i = 0; i < your-your_Images.length; i++){
        your_Images[i].remove();
    }
    for (let j = 0; j < dealer_Images.length; j++){
        dealer_Images[j].remove();
    }

    HIT_SOUND.play();

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent= 0;

    document.querySelector('#your-blackjack-result').getElementsByClassName.color = 'white';
    document.querySelector('#dealer-black-result').getElementsByClassName.color = 'white';


}

function displayCard(card, activePlayer){
    let cardImage = document.createElement('img');

    cardImage.src = 'images/${card}.png';

    document.querySelector(activePlayer['div']).appendChild(cardImage);

    HIT_SOUND.play();

}

function pickCard(){
    return blackjack_game['Cards'][Math.floor(Math.random()* 13)];


}

function updateScore(card, activePlayer){
    //Ace can be either 1 or 11
    //if the A can keep the score below 21 +11 if not then +1
    if (card == 'A'){
        
    }

}

function showScore(activePlayer){

}

function dealerLogic(){

}

function computeWiner(){

}

function showResult(result){

}

function blackjackReset(){

}

function updateTable(){

}

