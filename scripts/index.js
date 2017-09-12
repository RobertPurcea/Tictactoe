import {
	getAiMove,
	getOpponent
} from "./computerAi.js";

import {
	allowPlayerMove,
	forbidPlayerMoves,
	isTileAvailable, 
	isGameOver
} from "./utility.js";

import {
	fadeBorders,
	formatBorders
} from "./modifyStyle.js";


let game = new Array(9).fill(null);
let computer, human;

// erases side borders for a better look
formatBorders();

// start the game only after the user chooses a 'X' or 'O'
document.querySelectorAll("#choose button").forEach(elem => {
	elem.addEventListener("click", function () {
		human = this.textContent;
		computer = getOpponent(human);

		document.querySelector("#choose").className = "animated zoomOutDown";
		fadeBorders("in");

		if (computer == 'x') makeComputerMove();
		allowPlayerMove();
	});
})

// check game state after every move
// the AI moves immediately after the user does (one exception: if the AI moves first, in the game)
document.querySelectorAll(".gameGrid td").forEach((elem) => {
	elem.addEventListener("click", function (e) {
		if (isTileAvailable(this)) {
			makeHumanMove(this);
			if (isGameOver(game)) {
				forbidPlayerMoves();
				setTimeout(() => {
					document.querySelector("#choose").className = "animated zoomInDown";
				}, 500);
				setTimeout(resetGame, 1500);
				return;
			}
			
			makeComputerMove();
			if (isGameOver(game)) {
				forbidPlayerMoves();
				setTimeout(() => {
					document.querySelector("#choose").className = "animated zoomInDown";
				}, 500);
				setTimeout(resetGame, 1500);
				return;
			}
		}
	})
});

function makeHumanMove(tile) {
	game[parseInt(tile.id, 10)] = human;
	tile.textContent = human;
}

function makeComputerMove() {
	let moveIndex = getAiMove(game, computer, computer, human).index;
	game[moveIndex] = computer;
	document.getElementById(`${moveIndex}`).textContent = computer;
}

function resetGame() {
	let tiles = document.querySelectorAll(".gameGrid td");
	tiles.forEach((val, ind) => {
		tiles[ind].textContent = " ";
	});
	game.fill(null);
	computer = human = null;
	fadeBorders("out");
}