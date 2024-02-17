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
