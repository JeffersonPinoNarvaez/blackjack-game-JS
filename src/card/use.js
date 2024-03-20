
/**
 * 
 * @param {String} card value 
 * @returns Number car value in Number format
 * @description Function to get the numerical value of a card
 */
export const getCardValue = (value) => {
    const cardValue = value.substring(0, value.length - 1);
    if (isNaN(cardValue)) return (cardValue == "A") ? 11 : 10;
    return Number(cardValue);
};