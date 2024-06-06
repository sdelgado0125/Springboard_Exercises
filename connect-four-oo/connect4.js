/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */
class Game {
  constructor(height = 6, width = 7) {
    this.players = [];
    this.height = height;
    this.width = width;
    this.currPlayer = null;
    this.gameOver = false;
    this.board = [];
    this.handleGameClick = this.handleClick.bind(this);
    this.initializeGame();
  }

  initializeGame() {
    const p1Color = document.getElementById('p1-color').value;
    const p2Color = document.getElementById('p2-color').value;

    const p1 = new Player(p1Color);
    const p2 = new Player(p2Color);

    this.players = [p1, p2];
    this.currPlayer = p1;

    this.makeBoard();
    this.makeHtmlBoard();
  }

  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

  makeHtmlBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';

    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', this.handleGameClick);

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
    board.append(top);

    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');
      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
      board.append(row);
    }
  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.backgroundColor = this.currPlayer.color;
    piece.style.top = -50 * (y + 2);

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }

  endGame(msg) {
    alert(msg);
    const top = document.querySelector("#column-top");
    top.removeEventListener("click", this.handleGameClick);
  }

  handleClick(evt) {
    if (this.gameOver) return;

    const x = +evt.target.id;
    const y = this.findSpotForCol(x);

    if (y === null) {
      return;
    }

    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);

    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }

    if (this.checkForWin()) {
      this.gameOver = true;
      return this.endGame(`The ${this.currPlayer.color} player won!`);
    }

    this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
  }

  checkForWin() {
    const _win = cells =>
      cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer
      );

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }
}

class Player {
  constructor(color) {
    this.color = color;
  }
}

document.getElementById('start-game').addEventListener('click', () => {
  new Game();
});

/** makeBoard: create in-JS board structure:
 *   board = array of rows, each row is array of cells  (board[y][x])
 */
/** makeHtmlBoard: make HTML table and row of column tops. */
/** findSpotForCol: given column x, return top empty y (null if filled) */

/** placeInTable: update DOM to place piece into HTML table of board */

/** endGame: announce game end */

/** handleClick: handle click of column top to play piece */

/** checkForWin: check board cell-by-cell for "does a win start here?" */

