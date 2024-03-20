
/**
 * 
 * @param {String} player card 
 * @param {String} player or computer type 
 * @param {Array<String>} player array of cards
 * @param {Array<String>} computer array of cards
 * @returns empty
 * @description  Function to show a card in the UI
 */
export const showCard = ( card, type, player, computer ) => {
    if (!card) throw new Error("Card is mandatory");
    if (!type) throw new Error("Type is mandatory");
    if (!player) throw new Error("Player is mandatory");
    if (!computer) throw new Error("Computer is mandatory");

    const myCard = document.createElement('img');
    myCard.src = `assets/cards/${card}.png`;
    myCard.classList.add(type === 'player' ? 'player-cards' : 'computer-cards');
    (type === 'player' ? player : computer).append(myCard);
}