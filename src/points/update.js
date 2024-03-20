
/**
 * 
 * @param {Object<Any>} globalPoints of our human player
 * @param {Number} points to be added 
 * @type {String} type: 'human' or 'machine
 */
// Function to update player points in the UI
const updatePoints = (globalPoints, points, type) => {
    if (!globalPoints || !points) throw new Error("Global points and points are mandatory.")
    if (!type) throw new Error("Type is mandatory.")
    if (type === 'human') globalPoints[0].innerText = points;
    if (type === 'machine') globalPoints[1].innerText = points;
}

export default updatePoints