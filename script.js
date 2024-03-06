const cellsArray = document.querySelectorAll(".little-cell");
const gameBoard = [
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
];

const players = {
  x: "x",
  o: "o",
};

const currentPlayerDiv = document.querySelector(".current-player");
let currentPlayerText = currentPlayerDiv.innerHTML;

// console.log(currentPlayerText);

function renderBoard() {
  let currentPlayer = players.x;
  let previousMovement = null;

  for (let i = 0; i < cellsArray.length; i++) {
    cellsArray[i].addEventListener("click", function () {
      if (
        !this.classList.contains("blocked") &&
        ((previousMovement * 9 <= i && i <= previousMovement * 9 + 8) ||
          previousMovement === null)
      ) {
        if (currentPlayer === players.x) {
          this.innerHTML = '<img src="img/x.png" alt="X" />';
          currentPlayerText = 'Ход: <img src="img/o.png" alt="" />';
          gameBoard[Math.floor(i / 9)][Math.floor((i % 9) / 3)][
            Math.floor((i % 9) % 3)
          ] = currentPlayer;
          currentPlayer = players.o;
        } else {
          this.innerHTML = '<img src="img/o.png" alt="X" />';
          currentPlayerText = 'Ход: <img src="img/x.png" alt="" />';
          gameBoard[Math.floor(i / 9)][Math.floor((i % 9) / 3)][
            Math.floor((i % 9) % 3)
          ] = currentPlayer;
          currentPlayer = players.x;
        }
        currentPlayerDiv.innerHTML = currentPlayerText;
        this.classList.add("blocked");
        previousMovement = i % 9;
      }
      console.log(i);
      console.log(gameBoard);
    });
  }
}

// function massive_create() {
//   const big_cells = new Array(9).fill("");

//   const top_left_cell = new Array(9).fill("");
//   const top_cell = new Array(9).fill("");
//   const top_right_left_cell = new Array(9).fill("");
//   const left_cell = new Array(9).fill("");
//   const center_cell = new Array(9).fill("");
//   const right_cell = new Array(9).fill("");
//   const bottom_left_cell = new Array(9).fill("");
//   const bottom_cell = new Array(9).fill("");
//   const bottom_right_cell = new Array(9).fill("");

//   console.log(big_cells);
// }
