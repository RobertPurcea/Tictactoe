function areEqual(a, b, c) {
	if (a == b && b == c)
		return true;
	return false;
}

function checkColumn(gameMap, i) {
	if (areEqual(
			gameMap[i * 3 + 0],
			gameMap[i * 3 + 1],
			gameMap[i * 3 + 2]
		) && gameMap[i * 3] !== null) {
		return true;
	}
	return false;
}

function checkRow(gameMap, i) {
	if (areEqual(
			gameMap[i + 3 * 0],
			gameMap[i + 3 * 1],
			gameMap[i + 3 * 2]
		) && gameMap[i + 3 * 0] !== null) {
		return true;
	}
	return false;
}

/**
 * Check if a 3 x 3 array has elements on a diagonal equal and different from null.
 * 
 * gameMap[4] is part of both diagonals. We only need to check this element for null.
 * The indexes are simply typed, iterating for just 2 checks was too much trouble.
 * 
 * @param {array} gameMap
 */
function checkDiagonals(gameMap) {
	if (gameMap[4] !== null) {
		if (areEqual(gameMap[0], gameMap[4], gameMap[8]) ||
			areEqual(gameMap[2], gameMap[4], gameMap[6])) {
			return true;
		}
	}

	return false;
}













function isGameTied(gameMap) {
	for (let i = 0; i < 9; i++) {
		if (gameMap[i] === null) {
			return false;
		}
	}
	return true;
}

function isGameWon(gameMap) {
	for (let i = 0; i < 3; i++) {
		if (checkRow(gameMap, i) || checkColumn(gameMap, i)) {
			return true;
		}
	}
	if (checkDiagonals(gameMap)) {
		return true;
	}

	return false;
}

export {isGameWon, isGameTied};