const field = [
  ["♠", "♠", "♣", "♦", "♣", "♣"],
  ["♠", "♠", "♣", "♦", "♦", "♦"],
  ["♠", "♣", "♣", "♦", "♦", "♦"],
  ["♠", "♣", "♣", "♣", "♣", "♦"],
  ["♥", "♣", "♣", "♣", "♥", "♥"],
  ["♥", "♥", "♣", "♣", "♦", "♣"],
  ["♥", "♥", "♥", "♠", "♠", "♣"],
];

class Game {
  constructor(field, root) {
    this.field = field;
    this.root = root;
    this.rows = field.length;
    this.cols = field[0].length;
    this.visited = [];
    this.render();
  }

  render() {
    this.root.innerHTML = "";

    this.field.forEach((row, r) => {
      row.forEach((value, c) => {
        const cell = document.createElement("div");
        cell.className = "cell";

        if (!value) {
          cell.classList.add("empty");
        } else {
          cell.textContent = value;
          cell.addEventListener("click", () => this.click(r, c));
        }

        this.root.appendChild(cell);
      });
    });
  }
}