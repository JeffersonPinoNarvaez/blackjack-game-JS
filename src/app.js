import Swal from 'sweetalert2';
import _ from 'underscore';
import createDeck from './deck/create';
import { takeCard, getCardValue, showCard } from './card';
import alert from './alerts/alert';
import updatePoints from './points/update';

(() => {
    'use strict';

    let deck = [];
    const TYPE_DECKS = ['C', 'D', 'H', 'S'];
    const PICTURE_CARDS = ['A', 'J', 'Q', 'K'];

    let playerPoints = 0;
    let computerPoints = 0;

    const btnAskCard = document.querySelector('#askCard');
    const btnPlayerStop = document.querySelector('#stopGame');
    const btnNewGame = document.querySelector('#newGame');
    const playersPoints = document.querySelectorAll('small');
    const playerCards = document.querySelector('#player-cards');
    const computerCards = document.querySelector('#computer-cards');

    const getComputerCards = () => {
        do {
            const computerCard = takeCard(deck);
            computerPoints += getCardValue(computerCard);
            updatePoints(playersPoints, computerPoints, 'machine');
            showCard(computerCard, 'computer', playerCards, computerCards);
            if (computerPoints > 21 || playerPoints > 21) break;
        } while (computerPoints <= playerPoints && computerPoints <= 21);
        decideWinner();
    };

    const decideWinner = () => {
        btnPlayerStop.disabled = true;
        const winner = playerPoints > 21 || (computerPoints <= 21 && computerPoints > playerPoints) ? 2 :
            computerPoints > 21 || computerPoints < playerPoints ? 1 : 0;
        alert(winner, Swal);
    };

    const handleAskCard = () => {
        const myCard = takeCard(deck);
        playerPoints += getCardValue(myCard);
        updatePoints(playersPoints, playerPoints, 'human');
        showCard(myCard, 'player', playerCards, computerCards);
        if (playerPoints > 21) {
            getComputerCards();
            btnAskCard.disabled = true;
        }
        if (playerPoints == 21) {
            btnAskCard.disabled = true;
            btnPlayerStop.disabled = true;
            alert(1, Swal);
        }
    };

    const handleStopGame = () => {
        btnAskCard.disabled = true;
        getComputerCards();
    };

    const handleNewGame = () => {
        playerPoints = 0;
        computerPoints = 0;
        playersPoints.forEach(point => point.innerText = 0);
        btnAskCard.disabled = false;
        btnPlayerStop.disabled = false;
        playerCards.innerHTML = null;
        computerCards.innerHTML = null;
        deck = createDeck(TYPE_DECKS, PICTURE_CARDS);
    };

    btnNewGame.addEventListener('click', handleNewGame);
    btnPlayerStop.addEventListener('click', handleStopGame);
    btnAskCard.addEventListener('click', handleAskCard);

    return {
        initGame: handleNewGame
    };
})();