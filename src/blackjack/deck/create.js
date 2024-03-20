import _ from 'underscore';

/**
 * @param {Array<String>} typeDecks - Array of strings representing types of decks (e.g., ['C', 'D', 'H', 'S']).
 * @param {Array<String>} pictureCards - Array of strings representing picture cards (e.g., ['A', 'J', 'Q', 'K']).
 * @returns {Array<String>} - A new shuffled deck of cards.
 * @description Function to create a shuffled deck of cards based on type decks and picture cards.
 */
const createDeck = (typeDecks, pictureCards) => {
    if (!typeDecks || typeDecks.length === 0 || !pictureCards || pictureCards.length === 0) {
        throw new Error("Type decks and picture cards are mandatory.");
    }

    const deck = [];
    for (let i = 2; i <= 10; i++) {
        typeDecks.forEach(type => {
            deck.push(`${i}${type}`);
        });
    }
    pictureCards.forEach(card => {
        typeDecks.forEach(type => {
            deck.push(`${card}${type}`);
        });
    });

    return _.shuffle(deck); // Using lodash's shuffle function to shuffle the deck
};

export default createDeck;