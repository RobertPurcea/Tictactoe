import {
	isGameWon,
	isGameTied
} from "./gameOverCheck.js";


// give it a map, with x, o, and null and the letter of the AI and it returns the best move in an object
function getAiMove(gameMap, player, computer, human) {
	// if the game is over, return a score (1 if the AI won, 0 for ties, -1 if the human won)
	if (isGameWon(gameMap)) {
		if (player == computer) {
			return {score: -1};
		}
		return {score: 1};
	}
	if (isGameTied(gameMap)) {
		return {score: 0};
	}
	
	
	let bestMove = {};
	for (let i = 0; i < 9; i++) {
		if (gameMap[i] === null) {
			let initMap = gameMap.slice();

			gameMap[i] = player;
			let currMove = getAiMove(gameMap, getOpponent(player), computer, human);
			bestMove = getBestMove(bestMove, currMove, player, computer, human);
			
			// if the current move is better, update the index as well
			if (bestMove == currMove) {
				bestMove.index = i;
			}
			
			gameMap.forEach((val, ind) => {
				gameMap[ind] = initMap[ind];
			});
		}
	}

	return bestMove;
}

function getOpponent(player) {
	if (player == 'x') {
		return 'o';
	}
	return 'x';
}

/**
 * update the bestMove's score, it the currMove's score is better
 * Better means two things, depending on the current player:
 * 	if we evaluate computer's possible move, a better move is always the one with a higher score
 * 	if we evaluate human's possibilities, a better move is that with the lowest score. We 
 * 		consider that the human is always making the optimal move
 * @param {*} bestMove 
 * @param {*} currMove 
 * @param {*} player 
 */
function getBestMove(bestMove, currMove, player, computer, human) {
	if (bestMove.score == undefined) {
		return currMove;
	}
	if (player == human && bestMove.score > currMove.score) {
		return currMove;
	}
	if (player == computer && bestMove.score < currMove.score) {
		return currMove;
	}
	return bestMove;
}

export {
	getAiMove,
	getOpponent
}