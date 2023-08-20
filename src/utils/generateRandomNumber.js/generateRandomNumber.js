/**
 * Generates a random number between two limits
 * @param {Number} lowerLimit The lower number limit
 * @param {Number} upperLimit The higher number limit
 * @returns {Number} the random number result
 */
export const generateRandomNumber = (lowerLimit, upperLimit) => {
	const randomNumber = Math.random() * (upperLimit - lowerLimit) + lowerLimit;
	return randomNumber;
};
