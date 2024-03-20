
/**
 * 
 * @param {Array<String>} deck 
 * @returns {Array<String>} new Deck []
 * @description Function to take a card from the deck
 */ 
export const takeCard = (deck) => {
    if (deck.length == 0) throw new Error("No cards available");
    return deck.pop();
};
