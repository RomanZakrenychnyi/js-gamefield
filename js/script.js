const board = document.getElementById("board");

const field = [
  ["♦", "♣", "♣", "♠", "♥", "♥"],
  ["♦", "♦", "♣", "♠", "♠", "♥"],
  ["♣", "♦", "♣", "♣", "♠", "♥"],
  ["♣", "♣", "♣", "♥", "♥", "♦"],
  ["♠", "♠", "♥", "♥", "♦", "♦"],
  ["♠", "♣", "♣", "♦", "♦", "♠"],
  ["♥", "♥", "♠", "♠", "♣", "♣"],
];

class SimpleGame {
  constructor(field, container) {
    this.field = field;
    this.container = container;
    this.rowsCount = field.length;
    this.colsCount = field[0].length;
    this.checked = [];

    this.draw();
  }

  draw() {
    this.container.innerHTML = "";

    for (let row = 0; row < this.rowsCount; row++) {
      for (let col = 0; col < this.colsCount; col++) {
        const cellEl = document.createElement("div");
        cellEl.className = "cell";

        const value = this.field[row][col];

        if (!value) {
          cellEl.classList.add("empty");
        } else {
          cellEl.textContent = value;
          cellEl.onclick = () => this.onCellClick(row, col);
        }

        this.container.appendChild(cellEl);
      }
    }
  }

  onCellClick(row, col) {
    const currentValue = this.field[row][col];
    if (!currentValue) return;

    this.checked = [];
    const cellsToRemove = [];

    this.collectSameCells(row, col, currentValue, cellsToRemove);

    if (cellsToRemove.length < 2) return; // если группа меньше 2-х елементов — ничего не делаем

    for (let i = 0; i < cellsToRemove.length; i++) {
      const [r, c] = cellsToRemove[i];
      this.field[r][c] = null;
    }

    this.draw();
  }
}

new SimpleGame(field, board);
