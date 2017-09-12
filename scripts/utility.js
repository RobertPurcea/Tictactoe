import {
	isGameWon,
	isGameTied
} from "./gameOverCheck.js";

function allowPlayerMove() {
	document.querySelector(".gameGrid").style.pointerEvents = "auto";
}

function forbidPlayerMoves(params) {
	document.querySelector(".gameGrid").style.pointerEvents = "none";
}

function isTileAvailable(tile) {
	return (tile.textContent == " ");
}

function isGameOver(game) {
	return (isGameWon(game) || isGameTied(game));
}

export {
	allowPlayerMove,
	forbidPlayerMoves,
	isTileAvailable, 
	isGameOver
};