function fadeBorders(mode) {
	let tiles = document.querySelectorAll("td");
	let color = (mode == "in") ? "#E3E1E1" : "#666";
	tiles.forEach(tile => tile.style.borderColor = color);
}

function formatBorders() {
	document.querySelectorAll(".gameGrid td").forEach((val, ind) => {
		if (ind % 3 == 0) {
			val.style.borderLeft = "none";
		}
		if (ind % 3 == 2) {
			val.style.borderRight = "none";
		}

		if (Math.floor(ind / 3) == 0) {
			val.style.borderTop = "none";
		}
		if (Math.floor(ind / 3) == 2) {
			val.style.borderBottom = "none";
		}
	});
}

export {
	fadeBorders,
	formatBorders,
};