/**
 * @param {number} type - Type of alert: 0 for tie, 1 for player win, 2 for computer win.
 * @param {Object} alert - Instance of the Swal library for displaying alerts.
 * @returns {void} - This function does not return a value.
 * @description Function to determine the type of alert to display based on the game outcome.
 */
const alert = (type, alert) => {
    switch (type) {
        case 0:
            alert.fire("Both players got tied!");
            break;
        case 1:
            alert.fire({
                title: "Good job player!",
                text: "You beat the computer!",
                icon: "success"
            });
            break;
        case 2:
            alert.fire({
                icon: "error",
                title: ":(",
                text: "Sorry, the computer won."
            });
            break;
        default:
            break;
    }
};

export default alert;