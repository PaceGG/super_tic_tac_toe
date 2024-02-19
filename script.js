const cellsArray = document.querySelectorAll(".little-cell");

const players = {
  x: "x",
  o: "o",
};

let currentPlayer = players.x;

for (let i = 0; i < cellsArray.length; i++) {
  cellsArray[i].addEventListener("click", function () {
    if (!this.classList.contains("blocked")) {
      if (currentPlayer === players.x) {
        this.innerHTML = '<img src="img/x.png" alt="X" />';
        currentPlayer = players.o;
      } else {
        this.innerHTML = '<img src="img/o.png" alt="X" />';
        currentPlayer = players.x;
      }
      this.classList.add("blocked");
    }
  });
}

function massive_create() {
  const big_cells = new Array(9).fill("");

  const top_left_cell = new Array(9).fill("");
  const top_cell = new Array(9).fill("");
  const top_right_left_cell = new Array(9).fill("");
  const left_cell = new Array(9).fill("");
  const center_cell = new Array(9).fill("");
  const right_cell = new Array(9).fill("");
  const bottom_left_cell = new Array(9).fill("");
  const bottom_cell = new Array(9).fill("");
  const bottom_right_cell = new Array(9).fill("");

  console.log(big_cells);
}
